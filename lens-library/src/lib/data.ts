import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export interface Lens {
  id: string;
  mount: string;
  brand: string;
  model: string;
  focal_length: string;
  aperture: string;
  min_focus_distance: string;
  filter_thread: string;
  weight: string;
  dimensions: string;
  release_year: number;
  link: string;
}

// 定义数据目录
const dataDir = path.join(process.cwd(), "..", "data");

/**
 * 通用数据读取函数，支持读取 data 目录下的 JSON 或 YAML 文件
 */
export function loadData<T>(fileName: string): T {
  const filePath = path.join(dataDir, fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Data file not found: ${filePath}`);
  }
  const ext = path.extname(fileName).toLowerCase();
  const content = fs.readFileSync(filePath, "utf-8");
  if (ext === ".json") {
    return JSON.parse(content) as T;
  } else if (ext === ".yaml" || ext === ".yml") {
    return yaml.load(content) as T;
  } else {
    throw new Error(`Unsupported data format: ${ext}`);
  }
}

/**
 * 获取所有镜头数据
 */
export function getLenses(): Lens[] {
  return loadData<Lens[]>("lenses.json");
}

/**
 * 获取所有卡口名称，并去重
 */
export function getMounts(): string[] {
  const lenses = getLenses();
  return Array.from(new Set(lenses.map((lens) => lens.mount)));
} 
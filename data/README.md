# 数据目录说明

## 镜头数据格式规范

镜头数据文件支持 JSON 或 YAML 格式，存放于 `data/` 目录下，通常为 `lenses.json` 或 `lenses.yaml`。数据文件结构为一个镜头对象数组，每个对象包含以下字段：

| 字段                | 类型     | 描述                             | 示例                         |
| ------------------- | -------- | -------------------------------- | ---------------------------- |
| `id`                | string   | 镜头唯一标识                     | `"canon-ef-2470f28ii"`    |
| `mount`             | string   | 卡口类型                         | `"Canon EF"`               |
| `brand`             | string   | 镜头品牌                         | `"Canon"`                  |
| `model`             | string   | 镜头型号                         | `"EF 24-70mm f/2.8 II"`    |
| `focal_length`      | string   | 焦距（定焦或变焦范围）           | `"24-70mm"`                |
| `aperture`          | string   | 光圈范围                         | `"f/2.8-f/22"`             |
| `min_focus_distance`| string   | 最小对焦距离                     | `"0.38m"`                  |
| `filter_thread`     | string   | 滤镜口径                         | `"77mm"`                   |
| `weight`            | string   | 重量（带单位）                   | `"805g"`                   |
| `dimensions`        | string   | 尺寸（最大直径×长度）           | `"88.5×113mm"`             |
| `release_year`      | number   | 发布年份                         | `2012`                       |
| `link`              | string   | 外部购买链接（URL）              | `"https://www.example.com"` |

### JSON 示例

```json
[
  {
    "id": "canon-ef-2470f28ii",
    "mount": "Canon EF",
    "brand": "Canon",
    "model": "EF 24-70mm f/2.8 II",
    "focal_length": "24-70mm",
    "aperture": "f/2.8-f/22",
    "min_focus_distance": "0.38m",
    "filter_thread": "77mm",
    "weight": "805g",
    "dimensions": "88.5×113mm",
    "release_year": 2012,
    "link": "https://www.canon.com/ef-2470f28ii"
  }
]
```

### YAML 示例

```yaml
- id: sony-e-35mmf18
  mount: Sony E
  brand: Sony
  model: 35mm f/1.8 OSS
  focal_length: "35mm"
  aperture: "f/1.8"
  min_focus_distance: "0.28m"
  filter_thread: "49mm"
  weight: "154g"
  dimensions: "62.0×45.0mm"
  release_year: 2015
  link: "https://www.sony.com/e-35mmf18"
``` 
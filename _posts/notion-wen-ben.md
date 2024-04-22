---
title: notion 文本
date: 2024-04-22
tag: react,notion
description: sdfsfdsf
image: media/bojack-horseman-2020-4k-g9-3840x2400.jpg
imageAlt: sfsfsfss
lastModified: 2024-04-22
---
## Flutter/Dart 转为原生 APP

![https://res.craft.do/user/full/bff45bec-085e-7e13-3e40-83542478d385/doc/79BF9C23-A696-4991-86AC-61EA7A701F55/B114B716-4BBF-4889-9085-21029638173B\_2/3yFABmp8ZKbIW0Sxd8VCI9NqTVAQioX5CQvSBiihpY0z/Image.png](https://res.craft.do/user/full/bff45bec-085e-7e13-3e40-83542478d385/doc/79BF9C23-A696-4991-86AC-61EA7A701F55/B114B716-4BBF-4889-9085-21029638173B_2/3yFABmp8ZKbIW0Sxd8VCI9NqTVAQioX5CQvSBiihpY0z/Image.png)

![https://res.craft.do/user/full/bff45bec-085e-7e13-3e40-83542478d385/doc/79BF9C23-A696-4991-86AC-61EA7A701F55/1B2B0B9A-E460-46D1-B11E-176C2ABD3341\_2/0S049dcNDWHevX73fmpqcW7JYByxrp8cfIy0vY9nQbcz/Image.png](https://res.craft.do/user/full/bff45bec-085e-7e13-3e40-83542478d385/doc/79BF9C23-A696-4991-86AC-61EA7A701F55/1B2B0B9A-E460-46D1-B11E-176C2ABD3341_2/0S049dcNDWHevX73fmpqcW7JYByxrp8cfIy0vY9nQbcz/Image.png)

## 布局

对于 `Material` 应用程序，您可以使用 `Scaffold` 小部件；它提供默认横幅、背景颜色，并具有用于添加抽屉、小吃店和底页的 API。然后，您可以将 `Center` 小部件直接添加到主页的 `body` 属性中。

### 导航栏

AppBar主要属性有三个：`title`，`leading`，`actions`，可以用来自定义 App 的标题栏。

`title` 主要是设置中间文字的属性，可以配合 `Column` 布局、Text实现上下文字样式。

`leading` 属性主要展示左边的样式，可以配合图标实现左边的样式，如：

```dart
leading: GestureDetector(
  onTap: () {},
  child: Container(
    alignment: Alignment.center,
    child: SvgPicture.asset(
      'assets/images/ri_search-2-line.svg',
      width: 24,
      height: 24,
    ),
  ),
),

```

使用 `svg` 图标需要安装依赖 `flutter_svg`，并且在 `pubspec.yaml` 文件中配置静态文件：

```dart
assets:
  - assets/images/

```

> 图标没有显示成设置的大小，需要设置 alignment: [Alignment.center](http://Alignment.center) 属性

`actions` 属性设置的是右边样式，如左边样式设置相同。

`appBar` 不显示底部边框的阴影，需要设置 `elevation` 属性为 0

### 全屏背景图 + 文字

```dart
@override
  Widget build(BuildContext context) {
    return Scaffold(
      // Stack 用于在视觉上将多个部件叠加在一起
      body: Stack(
        children: [
          Container(
            decoration: const BoxDecoration(
              image: DecorationImage(
                image: AssetImage('assets/images/boarding.png'),
                fit: BoxFit.cover,
              ),
            ),
          ),
          Positioned(
            top: 270,
            left: 0,
            right: 0,
            bottom: 0,
            child: Container(
              padding: const EdgeInsets.only(left: 30),
              child: Align(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const Text(
                      'MAKE YOUR',
                      style: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.bold,
                        color: Color(0xff606060),
                      ),
                    ),
                    const SizedBox(height: 15),
                    const Text(
                      'HOME BEAUTIFUL',
                      style: TextStyle(
                        fontSize: 30,
                        fontWeight: FontWeight.bold,
                        color: Color(0xff303030),
                      ),
                    ),
                    const SizedBox(height: 35),
                    Container(
                      width: 300,
                      margin: const EdgeInsets.only(left: 30),
                      child: const Text(
                        'The best simple place where you discover most wonderful furnitures and make your home beautiful',
                        textAlign: TextAlign.justify,
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.normal,
                          color: Color(0xff808080),
                          height: 2,
                        ),
                      ),
                    ),
                    const SizedBox(height: 154),
                    Center(
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          padding: const EdgeInsets.symmetric(
                            horizontal: 30,
                            vertical: 15,
                          ),
                          backgroundColor: Colors.black,
                        ),
                        onPressed: () {
                          Navigator.push(
                            context,
                            LoginView.route(),
                          );
                        },
                        child: const Text(
                          'Get Started',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 18,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                      ),
                    )
                  ],
                ),
              ),
            ),
          )
        ],
      ),
    );
  }

```

### 横向滑动列表

代码片段：

```dart
return ListView(
  children: [
    const SizedBox(height: 20),
    SizedBox(
      height: 80,
      child: ListView.separated(
        scrollDirection: Axis.horizontal,
        itemBuilder: (context, index) {
          return Column(
            children: [
              Container(
                alignment: Alignment.center,
                width: 50,
                height: 50,
                decoration: BoxDecoration(
                  color: categories[index].isViewSelected
                      ? const Color(0xFF303030)
                      : const Color(0xFFF5F5F5),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: SvgPicture.asset(
                  categories[index].iconPath,
                  width: 28,
                  height: 28,
                ),
              ),
              const SizedBox(height: 5),
              Text(
                categories[index].name,
                style: const TextStyle(
                  fontWeight: FontWeight.w400,
                  color: Color(0xFF999999),
                  fontSize: 14,
                ),
              )
            ],
          );
        },
        separatorBuilder: (context, index) =>
            const SizedBox(width: 25),
        itemCount: categories.length,
        padding: const EdgeInsets.only(left: 20, right: 20),
      ),
    ),
  ],
);

```

### 表单样式

```dart
Column(
  crossAxisAlignment: CrossAxisAlignment.start,
  children: [
    const Text(
      'Email',
      style: TextStyle(
        color: Color(0xff909090),
        fontSize: 14,
        fontFamily: 'Nunito Sans',
      ),
    ),
    TextFormField(
      controller: TextEditingController(),
    )
  ],
),

```

## 安装依赖

1.  在 Mac 上使用快捷键 `Command` + `Shift` + `p` 选择 `Dart: Add Dependency` 搜索需要的依赖，就可以自动安装。
    
2.  命令安装：
    

```
flutter pub add flutter_svg
```
### BEM

#####为什么我应该选择 BEM 作为 CSS 的模块化解决方案？

If speaking about CSS modular solutions only, the key feature of BEM is block's independence. Following the CSS recommendations enables to put a block into any place on a page and be sure that is won't be affected by its surroundings. Also, if you would lately need to nest another block into the current one, their full compatibility is guaranteed. In other words, when maintaining your web application you would be able to move blocks across the page, add others and combine them.

#####我可以创建适用于任何块的全局修改器吗？

我听说全球改性剂像 visible，invisible，red，opacity50 未在 BEM 欢迎。为什么？

我认为将这样的常见属性合并到这样一个全局类中，然后将其应用于不同的块是非常有用的。

#####另一个元素中的元素的类名是什么？.block**el1**el2？

如果我的区块结构复杂，且其元素嵌套，我该怎么办？CSS 类 block**elem1**elem2\_\_elem3 看起来很吓人。根据 BEM 方法，块体结构应平坦化; 您不需要反映块的嵌套 DOM 结构。所以，这个例子的类名是：

.block {}
.block**elem1 {}
.block**elem2 {}
.block\_\_elem3 {}
而块的 DOM 表示可能是嵌套的：

<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'>
            <div class='block__elem3'></div>
        </div>
    </div>
</div>
除了类看起来好得多的事实之外，它使得元素仅依赖于块。因此，在提供界面更改时，您可以轻松地将它们移动到块中。块DOM结构的变化不需要对CSS代码做相应的改变。

<div class='block'>
    <div class='block__elem1'>
        <div class='block__elem2'></div>
    </div>
    <div class='block__elem3'></div>
</div>

##### 我听说 BEM 不推荐全球 CSS 重置。为什么？

通用 CSS 重置是一组应用于文档节点的 CSS，并确保其默认视图在不同浏览器中相同。在大多数情况下，CSS 规则是为标签选择器编写的，这在 BEM 中不推荐（你可以在上面找到很多解释）。

还有一点是，在 BEM 中，一个块封装了所有需要它显示和运行的内容。这就是为什么我们称之为独立的 BEM 模块。如果没有将第三方 CSS 添加到页面中，该块看起来不正确，那么它就不能被称为“独立”。

假设这一切，BEM 建议每个块自行重置。如果你的代码 menu 块和 list 块都与<ul>你的 HTML 一样，它们中的每一个都应该提供通常给定的重置 CSS <ul>。您可能会担心，具有相同重置规则的多个块会在结果代码中重复出现。但这是 CSS 优化器应该为你做的。作为开发人员，您可以独立开发每个模块，就好像在同一页面上没有其他模块一样。

如果您没有 CSS 优化器来将选择器与同一组规则结合使用，则可以使用预处理器来防止复制粘贴。随着每一个新的块，你可以重置自己混合正确的代码。例如，对于 SASS，这看起来像：

.menu {
@include reset-list;
}
.menu\_\_item {
@include reset-list-item;
}

/_ ... _/

.list {
@include reset-list;
}
.list\_\_item {
@include reset-list-item;
}

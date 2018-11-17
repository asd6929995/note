#DOM操作

##DOM节点的获取
+ 一， document.getElementByle('demo');
    - 最准确的获取需要的DOM元素，必须有ID，而且一个页面不能有重复的ID。
+ 二，document.getElementsByTagName('div');
    - 效率低，没法定位元素。
+ 三，document.geElementsByClassName('a');
    - 获取class命名，在IE 6,7,8中无效。

##分项节点获取
### 一，父节点获取（parentNode）
    - 调用者就是节点，一个节点只有一个父节点。格式：节点.parentNote  。
### 二，兄弟节点
    1. nextSibing
        - 调用者就是节点，存在兼容问题。
        - IE 6,7,8中指下一个元素节点（标签、注释）。
        - 在火狐谷歌IE9+以后都指的是下一个节点（包括空文档和换行节点）。
    2. nextElementSibling
        - 在火狐谷歌IE9都指下一个元素节点。
        - 兼容写法：
         nextEle=节点.nextElementSibling||节点.nextSibling；
         注意兼容写法位置不能交换。
    3. previousSibling 
        - 调用前一个节点。
        - IE 6,7,8为元素节点，其他为位置节点。
    4. previousElementSibling
        - 调用前一个节点
        - IE 6,7,8为位置节点，其他为元素节点。
### 三，单个子节点
    1. firstChile
        - 调用者是父节点。
        - ie 6,7,8 中指第一个子元素节点（标签）。
        - 火狐谷歌IE9以后第一都是第一个节点（包括空文档和换行节点）
    2. firstElementChild
        - 火狐谷歌IE9都的第一个元素节点。
    3. lastChild
        - 调用者都是父节点。
        - IE 6,7,8中指最后一个子元素节点（标签）。
        - 火狐 谷歌 IE9 以后都指的最后一个位置节点（包括空文档和换行节点）。
    4. lastElementChild
        -火狐 谷歌 IE9都指的最后一个元素节点。
### 四，所有子节点
    1. childNodes
        - 标准属性，嫡出。
        - 返回指定元素的子元素集合，包括HTML节点，所有属性，文本（他还是W3C的亲儿子）
        - 火狐 谷歌登高版本会把换行符也看作是子节点。
    2. nodeType     (属性返回以数字值返回指定节点的节点类型。）
        - nodeType == 1 (元素节点)
        - nodeType == 2 (属性节点)
        - nodeType == 3 (文本节点)
        - nodeType == 8 (注释)
    3. children    
        - 非标准属性，庶出，放回指定元素的子元素集合。
        - 只返回HTML节点，甚至不返回文本节点。
        - 在IE 6,7,8 中包含注释节点。（不要在IE 6,7,8 中写）
### 五，DOM 节点的操作
    1. 创建节点。
        - 使用方法和样式：
            document.createElement();//创建元素
            document.createTextNode();//创建节点内容
    2. 插入节点（使用节点）
        - 使用方法和样式：
            父节点.appendChild();
        - 另一种使用方式:
            父节点.insertBefore(要插入的节点,参考节点);
            注：如果使用的参考节点为null,那么他将在节点最后插入一个节点。
    3. 删除节点
        - 用法：
            父节点.remoreChild(子节点);
            节点自己删除自己。不知道父级的情况下可以：
            node.parentNode.removeChild(node);
    4. 复制节点
        - 用法
            oldNode.cloneNode(true);
        - 想要复制的节点调用这个函数cloneNode(),得到一个姓节点。方法内部可以传参，入股是tyre，深层复制，如果是false，只复制节点本身。
    5. 节点属性
        - 获取：getAttribute(名称);
        - 设置：setAttribute(名称,值);
        - 删除：removeAttribute(名称);
    6. 其他
        - value 只对表单有效果，是属性。
        - innerHTML 插入可执行的标签，常用于动态生成页面元素；
        - innerText 插入文本内容，标签和样式会被当做文本内容处理。
        - textContent 与 innerText一样 只是能被IE兼容。
#BOM
###三大家族和一个事件对象
    1.  Offset
    2.  scroll
    3.  client
    4.  事件对象/event   （事件被触动时，鼠标和键盘的状态）（通过属性控制） 
###offset介绍
    1.  offsetWidth 和 offsetHight 
            - 检测盒子自身宽高。这两个属性，他们绑定在了所有的节点元素上。获取之后，只要调用这两个属性，我们就能够获取元素节点的宽和高。 
            - offsetWidth = width+padding+border；
            - offsetHeight = Height+padding+border；
    2.  offsetLeft 和 offsetTop
            - 检测距离父盒子有定位的左/上面的距离
            - offsetLeft 返回距离上级盒子（带有定位）左边的位置
              如果父级都没有定位则以body为准
            - offsetLeft 从父亲的padding 开始算,父亲的border 不算。
            - 在父盒子有定位的情况下，offsetLeft == style.left(去掉px)                           
    3.  offsetParent
            - 检测父系盒子中带有定位的父盒子节点
            - 如果当前元素的父级元素没有进行CSS定位（position为absolute或         relative，fixed），    offsetParent为body。
            - 如果当前元素的父级元素中有CSS定位（position为absolute或             relative，fixed），    offsetParent取最近的那个父级元素。
    4.  offsetLeft和style.left区别
            - 最大区别在于offsetLeft可以返回没有定位盒子的距离左侧的位置。而 style.left不可以
            - offsetTop 返回的是数字，而 style.top返回的是字符串，除了数字外还带有单位：px。
            - offsetTop 只读，而 style.top 可读写。（只读是获取值，可写是赋值）
            - 如果没有给 HTML 元素指定过 top 样式，则style.top 返回的是空字符串。
###scroll组成
    1. ScrollWidth和scrollHeight（不包括border）
        - 检测盒子的宽高。（调用者：节点元素。属性。）
          盒子内容的宽高。（如果有内容超出了，显示内容的高度）
    2.  scrollLeft
        - 网页，被浏览器遮挡的头部和左边部分。
          被卷去的头部和左边部分。
    3.  兼容性问题
            一、未声明 DTD（谷歌只认识他）
                document.body.scrollTop
            二、已经声明DTD（IE678只认识他）
               document.documentElement.scrollTop
            三、火狐/谷歌/ie9+以上支持的
               window.pageYOffset
            四、兼容写法
                var top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    4. 获取title、body、head、html标签
        document.title --- 文档标题；
        document.head --- 文档的头标签
        document.body --- 文档的body标签；
        document.documentElement --- html
    5. Element.scrollTop 属性可以获取或设置一个元素的内容垂直滚动的像素数。
        - document.documentElement.scrollTop =intvalue;
###事件对象Event
    1. 再触发DOM上的某个事件时，会产生一个事件对象event，这个对象中包含着所有与事件有关的信息。所有浏览器都支持event对象，但支持的方式不同。
    2. 普通浏览器支持 event（带参，任意参数）
       ie 678 支持 window.event（无参，内置）
    3. 事件对象的获取（event的获取）
        - IE678中，window.event 
         在火狐谷歌中，event或者，在事件绑定的函数中，加参，这个参数就是event.
    4. 兼容方式：
        - var event = event||window.event;
    5. screenX、pageX和clientX的区别
        - PageY/pageX: 鼠标位于整个网页页面的顶部和左侧部分的距离。（页面）
          ScreenY/screenX: 鼠标位于屏幕的上方和左侧的距离。（屏幕）
          ClientX/clientY: 鼠标位于浏览器的左侧和顶部的距离。（浏览器大小和位置）
    6. PageY和pageX的兼容写法
        - 在页面位置就等于 = 当前位置+被卷走的长度
        pageY/pageX=event.clientY/clientY+window.scrollTop/scrollLeft
    7.新事件（onmousemove）
        - 只要鼠标在绑定该事件的事件源上移动，哪怕1像素，也会触动这个事件。
         （这个事件可以直接或者间接的替代定时器）
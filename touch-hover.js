let touchHoverOn = true,  // 定义变量，表示此功能是否开启，默认开启
	inHover = false,      // 定义变量，表示触摸事件是否正在触发
	node = null;          // 定义变量，表示有data-hover属性的节点元素

// 获取层次上离触摸元素最近的设置data-hover属性的元素
let getTarget = (node)=>{
	if(!node || !(node instanceof Element)){
		return null;
	} else if(node.dataset.hover !== undefined){
		return node;
	} else if(node.parentNode != null){
		return getTarget(node.parentNode);
	}
}

// 定义touchstart事件函数
let touchStart = (e)=>{
	// 如果触摸元素大于1个，或者该事件正被其他元素触发，或者此功能压根就没有开启，直接返回
	if(e.touches.length > 1 || inHover || !touchHoverOn){
		return;
	}
	node = getTarget(e.touches.item(0).target);
	if(node == null){
		return;
	}
	inHover = true;
	node.dataset.hover && node.classList.add(node.dataset.hover);
}

// 定义touchend事件函数
let touchEnd = ()=>{
	if(inHover){
		inHover = false;
		node.dataset.hover && node.classList.remove(node.dataset.hover);
	}
}

// 将事件绑定到documentElement上
let doc = document.documentElement;
doc.addEventListener('touchstart',touchStart);
doc.addEventListener('touchend',touchEnd);
doc.addEventListener('touchcancel',touchEnd);

// 控制此功能是否开启
export let touchHover = {
	on(){
		touchHoverOn = true;
	},
	off(){
		touchHoverOn = false;
	}
}

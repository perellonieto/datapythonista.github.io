$u.SvgLoader=$class({CONTAINER_TPL:'<div style="display: none" aria-hidden="true">{svg}</div>',_callback:null,_ctx:null,constructor:function(t,l,a){l&&(this._callback=l,this._ctx=a||window),new $r(t,{cors:!0,json:!1,show_fatal:!1,ready:this.ready},this)},ready:function(t){var l=$u.tpl2el(this.CONTAINER_TPL,{svg:t});document.body.insertBefore(l,document.body.firstChild),this._callback&&this._callback.call(this._ctx)}});
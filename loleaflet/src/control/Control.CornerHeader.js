/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.CornerHeader
*/

/*
	Calc only.
*/

/* global */
L.Control.CornerHeader = L.Class.extend({
	name: L.CSections.CornerHeader.name,
	anchor: ['top', 'left'],
	position: [0, 0],
	size: [48 * window.devicePixelRatio, 19 * window.devicePixelRatio], // These values are static.
	expand: [''], // Don't expand.
	processingOrder: L.CSections.CornerHeader.processingOrder,
	drawingOrder: L.CSections.CornerHeader.drawingOrder,
	zIndex: L.CSections.CornerHeader.zIndex,
	interactable: true,
	sectionProperties: {
		cursor: 'pointer'
	},

	onInitialize: function () {
		this._map = L.Map.THIS;
	},

	onDraw: function () {
		//this.context.fillStyle = this._borderColor;
		this.context.fillStyle = 'lightgray';
		this.context.fillRect(0, 0, this.size[0], this.size[1]);
	},

	onClick: function () {
		this._map.sendUnoCommand('.uno:SelectAll');
	},

	onMouseEnter: function () {
		this.containerObject.canvas.style.cursor = this.sectionProperties.cursor;
	},

	onMouseLeave: function () {
		this.containerObject.canvas.style.cursor = 'default';
	},

	onLongPress: function () {},
	onResize: function () {},
	onContextMenu: function () {},
	onMouseMove: function () {},
	onDoubleClick: function () {},
	onNewDocumentTopLeft: function() {},
	onMouseDown: function () {},
	onMouseUp: function () {}
});

L.control.cornerHeader = function (options) {
	return new L.Control.CornerHeader(options);
};

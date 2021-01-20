/* -*- js-indent-level: 8 -*- */
/*
 * L.Control.CornerGroup
*/

/*
	Calc only.
*/

/* global */
L.Control.CornerGroup = L.Class.extend({
	name: L.CSections.CornerGroup.name,
	anchor: ['top', 'left'],
	position: [0, 0],
	size: [0, 0], // Width and height will be calculated on the fly, according to width of RowGroups and height of ColumnGroups.
	expand: [''], // Don't expand.
	processingOrder: L.CSections.CornerGroup.processingOrder,
	drawingOrder: L.CSections.CornerGroup.drawingOrder,
	zIndex: L.CSections.CornerGroup.zIndex,
	interactable: true,
	sectionProperties: {
		cursor: 'pointer'
	},

	onInitialize: function () {
		this._map = L.Map.THIS;
		this._map.on('sheetgeometrychanged', this.update, this);
		this._map.on('viewrowcolumnheaders', this.update, this);
	},

	update: function () {
		// If an instance of this section exists, it means that row and column groups exist at the same time.
		// And we need their width and height information.
		var rowGroupSection = this.containerObject.getSectionWithName(L.CSections.RowGroup.name);
		rowGroupSection.update();
		this.size[0] = rowGroupSection._computeOutlineWidth();

		var columnGroupSection = this.containerObject.getSectionWithName(L.CSections.ColumnGroup.name);
		columnGroupSection.update();
		this.size[1] = columnGroupSection._computeOutlineHeight();

		this.containerObject.onResize();
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
		this.containerObject.canvas.style.cursor = 'pointer';
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

L.control.cornerGroup = function (options) {
	return new L.Control.CornerGroup(options);
};
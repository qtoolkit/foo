/**
 * 矩形
 */
export = class Rect {
	public x:number;
	public y:number;
	public w:number;
	public h:number;

	constructor(x:number, y:number, w:number, h:number) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
	}

	/**
	 * 判断点是否在矩形内。
	 * @param x X坐标。
	 * @param y Y坐标。
	 * @returns 如果点在矩形内返回true，否则返回false。
	 */
	isPointIn(x:number, y:number):boolean {
		return x >= this.x && x <= (this.x + this.w) && y >= this.y && this.y <= (this.y + this.h);
	}

	/**
	 * 计算矩形的面积。
	 */
	area():number {
		return this.w * this.h;
	}
};


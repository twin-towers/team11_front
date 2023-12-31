type Canvas = {
	backgroundColor: string;
	backgroundImage: string;
	height: number;
	padding: number;
	width: number;
};

type GeneralShape = {
	coordinates: {
		x: number;
		y: number;
	};
	rotate: number; // 0 - 360
	zIndex: number;
};

type ImageIcon = GeneralShape & {
	id: string;
	size: number;
};

type SimpleIcon = ImageIcon & {
	color: string;
};

type Image = GeneralShape & {
	fit: 'contain' | 'cover';
	height: number;
	src: string;
	width: number;
};

type Text = GeneralShape & {
	color: string;
	decoration: 'line-through' | 'none' | 'overline' | 'underline' | 'wavy';
	href?: string;
	isItalic: false;
	name: string;
	size: number;
	text: string;
	weight: number;
};

type Entity = Image | SimpleIcon | Text;

type Project = {
	canvas: Canvas;
	entities: Entity[];
	name: string;
};

type ProjectItemResponse = {
	id: number;
	name: string;
	updateAt: string; // timestamp
};

// sorted by updateAt
type ProjectListResponse = ProjectItemResponse[];

export type { Entity, Project, ProjectListResponse };

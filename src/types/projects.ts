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

type IconGeneral = GeneralShape & {
	id: string;
	size: number;
};

type IconProps =
	| {
			color: string;
			type: 'border' | 'simple';
	}
	| {
			type: 'image';
	};

type Icon = IconGeneral & IconProps;

type Image = GeneralShape & {
	fit: 'contain' | 'cover';
	height: number;
	src: string;
	width: number;
};

type Text = GeneralShape & {
	color: string;
	href?: string;
	name: string;
	size: number;
	text: string;
};

type Entity = Icon | Image | Text;

type Project = {
	canvas: Canvas;
	entities: Entity[];
	name: string;
};


type ProjectItemResponse = {
	id: number;
	name: string;
	updateAt: string; // timestamp
}

// sorted by updateAt
type ProjectListResponse = ProjectItemResponse[]


export type { Entity, Project, ProjectListResponse };

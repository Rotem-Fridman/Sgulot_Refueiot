(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_1", frames: [[0,0,917,920],[910,922,1018,675],[919,0,1018,665],[0,922,908,846]]},
		{name:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_2", frames: [[0,1334,835,633],[837,1334,835,633],[750,0,835,670],[750,672,835,660],[0,0,748,888]]},
		{name:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_3", frames: [[0,0,835,633],[837,0,835,633],[0,635,631,818],[1266,635,604,792],[633,635,631,818]]},
		{name:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_4", frames: [[1264,581,528,704],[560,0,702,602],[1264,0,702,579],[566,604,634,586],[0,0,558,852],[0,854,564,794],[566,1287,528,704],[1096,1287,606,606]]},
		{name:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_5", frames: [[0,0,477,763],[479,0,431,713],[0,765,477,763],[479,715,431,713],[506,1430,438,561],[912,508,464,571],[1452,0,521,494],[912,0,538,506],[1378,508,478,498],[0,1530,504,516],[1401,1008,423,525],[946,1081,453,529],[946,1612,782,295]]},
		{name:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_6", frames: [[588,419,80,2],[670,419,80,2],[681,1171,616,137],[588,423,80,2],[670,423,80,2],[2023,0,2,71],[1146,428,80,2],[1942,434,80,2],[1942,438,80,2],[1942,442,80,2],[156,1310,541,72],[1942,446,80,2],[1942,450,80,2],[1942,454,80,2],[1942,458,80,2],[2027,0,2,71],[1942,462,80,2],[1942,466,80,2],[1942,470,80,2],[1942,474,80,2],[1942,478,80,2],[1942,482,80,2],[1942,486,80,2],[699,1310,541,72],[1942,490,80,2],[1299,1268,616,137],[156,1278,487,2],[156,1282,487,2],[156,1286,487,2],[156,1290,487,2],[156,1294,487,2],[681,779,357,303],[1520,434,420,394],[1040,888,335,281],[755,0,495,426],[1252,0,488,432],[0,640,358,455],[1146,434,372,452],[360,640,105,114],[588,292,133,125],[1742,0,233,432],[1520,830,228,436],[588,428,556,349],[0,292,586,346],[360,779,319,497],[1977,0,44,44],[0,0,753,290],[0,1097,154,522]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_110 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_497 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_496 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_495 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_494 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102copy2 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_493 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(img.CachedBmp_98);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2465,1178);


(lib.CachedBmp_96 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_95 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_492 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_491 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_490 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_489 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_488 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_487 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_486 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_485 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_484 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_483 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(img.CachedBmp_103);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2465,1178);


(lib.CachedBmp_102 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_482 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_481 = function() {
	this.initialize(img.CachedBmp_481);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2412,1103);


(lib.CachedBmp_480 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_479 = function() {
	this.initialize(img.CachedBmp_479);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2412,1103);


(lib.CachedBmp_478 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_477 = function() {
	this.initialize(img.CachedBmp_477);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2412,1101);


(lib.CachedBmp_476 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_475 = function() {
	this.initialize(img.CachedBmp_475);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2413,1150);


(lib.CachedBmp_474 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_473 = function() {
	this.initialize(img.CachedBmp_473);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2413,1144);


(lib.CachedBmp_50 = function() {
	this.initialize(img.CachedBmp_50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2465,1178);


(lib.CachedBmp_472 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_471 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_470 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_469 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_468 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_467 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_466 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_465 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_464 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_463 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_462 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_461 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_460 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_459 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_458 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_457 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_456 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_455 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.hit_logo_new = function() {
	this.initialize(img.hit_logo_new);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,1636);


(lib.אישה = function() {
	this.initialize(ss["Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sage_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("מרווה", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 42;
	this.text.parent = this;
	this.text.setTransform(22.85,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AjkCYIAAkvIHJAAIAAEvg");
	this.shape.setTransform(22.875,15.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sage_txt, new cjs.Rectangle(0,0,45.8,30.4), null);


(lib.mint_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("נענע", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 42;
	this.text.parent = this;
	this.text.setTransform(22.85,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AjkCYIAAkvIHJAAIAAEvg");
	this.shape.setTransform(22.85,15.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mint_txt, new cjs.Rectangle(0,0,45.8,30.4), null);


(lib.mellissa_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("מליסה", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 49;
	this.text.parent = this;
	this.text.setTransform(26.35,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AkHCXIAAktIIPAAIAAEtg");
	this.shape.setTransform(26.325,15.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mellissa_txt, new cjs.Rectangle(0,0,52.7,30.2), null);


(lib.luoisa_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("לואיזה", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 49;
	this.text.parent = this;
	this.text.setTransform(26.35,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(89,89,89,0)").s().p("AEGBzIAAjlIAXAAIAADlgAkcBzIAAjlIAUAAIAADlg");
	this.shape.setTransform(26.5,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAF4").s().p("AkHCXIAAgqIAAjlIAAgeIIPAAIAAAeIAADlIAAAqg");
	this.shape_1.setTransform(26.35,15.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.luoisa_txt, new cjs.Rectangle(-2,0,57,30.2), null);


(lib.garenium_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("גרניום לימוני", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 105;
	this.text.parent = this;
	this.text.setTransform(54.6,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AoiChIAAlBIREAAIAAFBg");
	this.shape.setTransform(54.65,16.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(89,89,89,0)").s().p("AgPChIAAlBIAfAAIAAFBg");
	this.shape_1.setTransform(-1.6,16.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.garenium_txt, new cjs.Rectangle(-3.2,0,112.5,32.1), null);


(lib.HeaderText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("כדי להקל עליכם, ניתן לסנן מראש את הצמחים לפי רמת השקיה או תאורה", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 530;
	this.text.parent = this;
	this.text.setTransform(0,-2.55);

	this.text_1 = new cjs.Text("כך תטפלו בכאב בדרך טבעית, באמצעות צמחים שניתן לגדל בבית", "20px 'Assistant'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 477;
	this.text_1.parent = this;
	this.text_1.setTransform(24.55,-30.1);

	this.text_2 = new cjs.Text("?כואב הראש ?שוב חזרה המיגרה", "20px 'Assistant'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 28;
	this.text_2.lineWidth = 235;
	this.text_2.parent = this;
	this.text_2.setTransform(145.6,-57.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HeaderText, new cjs.Rectangle(-266.7,-59.6,533.5,119.2), null);


(lib.throat_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("דלקת גרון", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 74;
	this.text.parent = this;
	this.text.setTransform(39.75,-2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AmDCqIAAlTIMHAAIAAFTg");
	this.shape.setTransform(38.725,13.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.throat_txt, new cjs.Rectangle(0,-4,78.5,34.2), null);


(lib.teeth_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("דלקת חניכיים", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 101;
	this.text.parent = this;
	this.text.setTransform(52.25,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("Ap/EiIAApDIT/AAIAAJDg");
	this.shape.setTransform(52.236,15.0465,0.8164,0.519);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.teeth_txt, new cjs.Rectangle(0,0,104.5,30.2), null);


(lib.stress_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("חרדה", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 44;
	this.text.parent = this;
	this.text.setTransform(22.8,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AjlBfIAAi9IHKAAIAAC9g");
	this.shape.setTransform(22.9,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stress_txt, new cjs.Rectangle(-1,0,47.7,30.2), null);


(lib.stomach_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("נפיחות ביטנית", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 105;
	this.text.parent = this;
	this.text.setTransform(54.5,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AohB4IAAjvIRDAAIAADvg");
	this.shape.setTransform(54.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stomach_txt, new cjs.Rectangle(0,0,109.1,30.2), null);


(lib.sleep_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("נדודי שינה", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 78;
	this.text.parent = this;
	this.text.setTransform(41.15,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AmjCWIAAkrINHAAIAAErg");
	this.shape.setTransform(42,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sleep_txt, new cjs.Rectangle(0,0,84,30.8), null);


(lib.haed_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("כאב ראש", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 68;
	this.text.parent = this;
	this.text.setTransform(36.1,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AmtCWIAAkrINbAAIAAErg");
	this.shape.setTransform(36,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.haed_txt, new cjs.Rectangle(-7,0,86,58.3), null);


(lib.fire_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("צרבות", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 48;
	this.text.parent = this;
	this.text.setTransform(26.2,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("ApIFoIAArPISRAAIAALPg");
	this.shape.setTransform(26.1757,14.9872,0.449,0.4167);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fire_txt, new cjs.Rectangle(-0.1,0,52.6,31.4), null);


(lib.eye_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("דלקת עיניים", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 91;
	this.text.parent = this;
	this.text.setTransform(47.6,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AnfCMIAAkXIO/AAIAAEXg");
	this.shape.setTransform(47.975,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_txt, new cjs.Rectangle(0,0,96,30.2), null);


(lib.ear_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("דלקת אוזניים", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 101;
	this.text.parent = this;
	this.text.setTransform(52.6,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AoKCWIAAkrIQVAAIAAErg");
	this.shape.setTransform(52.225,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ear_txt, new cjs.Rectangle(0,0,104.9,30.2), null);


(lib.acne_txt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("אקנה", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 41;
	this.text.parent = this;
	this.text.setTransform(22.65,2.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AjjCZIAAkyIHHAAIAAEyg");
	this.shape.setTransform(22.7,15.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.acne_txt, new cjs.Rectangle(0,0,45.5,30.7), null);


(lib.red_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhUBUQgjgiAAgyQAAgwAjgkQAkgjAwAAQAyAAAiAjQAkAkAAAwQAAAygkAiQgiAkgyAAQgwAAgkgkg");
	this.shape.setTransform(12,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhPBQQghgiAAguQAAgtAhgiQAighAtAAQAuAAAiAhQAhAiAAAtQAAAughAiQgiAhguAAQgtAAgighg");
	this.shape_1.setTransform(12,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AhKBKQgegegBgsQABgrAegfQAfgfArAAQAsAAAeAfQAfAfABArQgBAsgfAeQgeAggsAAQgrAAgfggg");
	this.shape_2.setTransform(12,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhFBGQgdgdABgpQgBgoAdgdQAdgdAoAAQAoAAAeAdQAdAdAAAoQAAApgdAdQgeAdgoAAQgoAAgdgdg");
	this.shape_3.setTransform(12,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ag/BBQgbgbAAgmQAAglAbgbQAbgbAkAAQAlAAAbAbQAbAbAAAlQAAAmgbAbQgbAbglAAQgkAAgbgbg");
	this.shape_4.setTransform(12,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("Ag7A8QgYgZAAgjQAAgiAYgZQAagZAhAAQAjAAAYAZQAZAZAAAiQAAAjgZAZQgYAZgjAAQghAAgagZg");
	this.shape_5.setTransform(12,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ag1A3QgXgXAAggQAAgfAXgXQAWgXAfAAQAgAAAWAXQAXAXAAAfQAAAggXAXQgWAXggAAQgfAAgWgXg");
	this.shape_6.setTransform(12,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AgxAyQgUgUAAgeQAAgcAUgVQAVgVAcAAQAdAAAUAVQAVAVAAAcQAAAegVAUQgUAVgdAAQgcAAgVgVg");
	this.shape_7.setTransform(12.025,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AgrAtQgSgTAAgaQAAgaASgSQASgTAZAAQAaAAASATQATASAAAaQAAAagTATQgSATgaAAQgZAAgSgTg");
	this.shape_8.setTransform(12,12);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgnAoQgPgQAAgYQAAgWAPgSQARgQAWAAQAXAAAQAQQAQASAAAWQAAAYgQAQQgQARgXAAQgWAAgRgRg");
	this.shape_9.setTransform(12,12);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AghAjQgOgOAAgVQAAgTAOgPQAOgPATAAQAUAAAOAPQAOAPAAATQAAAVgOAOQgOAPgUAAQgTAAgOgPg");
	this.shape_10.setTransform(12,12);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgcAeQgMgMAAgSQAAgRAMgNQAMgMAQAAQARAAALAMQANANAAARQAAASgNAMQgLANgRAAQgQAAgMgNg");
	this.shape_11.setTransform(12,12);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AgXAaQgKgLAAgPQAAgOAKgLQAKgKANAAQAOAAAJAKQALALAAAOQAAAPgLALQgJAKgOAAQgNAAgKgKg");
	this.shape_12.setTransform(12,12);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("AgSAUQgHgIAAgMQAAgLAHgIQAIgJAKAAQALAAAIAJQAHAIABALQgBAMgHAIQgIAJgLAAQgKAAgIgJg");
	this.shape_13.setTransform(12,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("AgNAQQgGgHABgJQgBgIAGgHQAGgGAHAAQAIAAAFAGQAHAHgBAIQABAJgHAHQgFAGgIAAQgHAAgGgGg");
	this.shape_14.setTransform(12,12);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AgRAUQgIgJAAgLQAAgLAIgIQAIgIAJAAQALAAAHAIQAIAIAAALQAAALgIAJQgHAIgLAAQgJAAgIgIg");
	this.shape_15.setTransform(12,12);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("AgXAYQgJgKAAgOQAAgNAJgKQAKgKANAAQANAAAKAKQAKAKAAANQAAAOgKAKQgKAKgNAAQgNAAgKgKg");
	this.shape_16.setTransform(12,12.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("AgbAdQgMgNAAgQQAAgQAMgMQAMgLAPAAQARAAALALQAMAMgBAQQABAQgMANQgLALgRAAQgPAAgMgLg");
	this.shape_17.setTransform(12,12.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AggAhQgNgOAAgTQAAgTANgNQAPgOARAAQATAAANAOQAOANAAATQAAATgOAOQgNAOgTAAQgRAAgPgOg");
	this.shape_18.setTransform(12,12.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AgkAlQgPgQgBgVQABgVAPgQQAQgOAUAAQAWAAAPAOQAQAQAAAVQAAAVgQAQQgPAPgWAAQgUAAgQgPg");
	this.shape_19.setTransform(12,12.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgpApQgSgRAAgYQAAgYASgRQASgRAXAAQAYAAARARQATARgBAYQABAYgTARQgRASgYAAQgXAAgSgSg");
	this.shape_20.setTransform(12,12.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AguAuQgTgUAAgaQAAgaATgTQAVgTAZAAQAbAAATATQAUATAAAaQAAAagUAUQgTATgbAAQgZAAgVgTg");
	this.shape_21.setTransform(12,12.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AgzAyQgUgVAAgdQAAgcAUgVQAXgVAcAAQAeAAAVAVQAWAVAAAcQAAAdgWAVQgVAVgeAAQgcAAgXgVg");
	this.shape_22.setTransform(12,12.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("Ag3A3QgXgYAAgfQAAgfAXgXQAYgWAfAAQAhAAAWAWQAYAXAAAfQAAAfgYAYQgWAWghAAQgfAAgYgWg");
	this.shape_23.setTransform(12,12.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("Ag8A7QgZgZAAgiQAAghAZgZQAbgYAhAAQAjAAAZAYQAaAZAAAhQAAAigaAZQgZAZgjgBQghABgbgZg");
	this.shape_24.setTransform(12,12.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AhAA/QgbgbAAgkQAAgkAbgaQAcgbAkAAQAnAAAaAbQAcAagBAkQABAkgcAbQgaAbgnAAQgkAAgcgbg");
	this.shape_25.setTransform(12,12.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AhGBDQgcgcAAgnQAAgnAcgcQAfgcAnAAQApAAAdAcQAdAcAAAnQAAAngdAcQgdAdgpAAQgnAAgfgdg");
	this.shape_26.setTransform(12,12.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s().p("AhKBIQgegfgBgpQABgpAegeQAhgeApAAQAsAAAeAeQAgAeAAApQAAApggAfQgeAegsAAQgpAAghgeg");
	this.shape_27.setTransform(12,12.125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s().p("AhPBMQghghAAgrQAAgsAhggQAjgfAsAAQAvAAAgAfQAiAggBAsQABArgiAhQggAggvAAQgsAAgjggg");
	this.shape_28.setTransform(12,12.15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AhUBQQgigiAAguQAAgvAighQAmghAuAAQAyAAAhAhQAkAhAAAvQAAAugkAiQghAigyAAQguAAgmgig");
	this.shape_29.setTransform(12,12.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24,24);


(lib.not_found = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("לא נמצאו צמחים התואמים את הסינון שבחרת", "normal 400 16px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 21;
	this.text.lineWidth = 206;
	this.text.parent = this;
	this.text.setTransform(127.3,12.55);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AwCkOMAgFAAAIAAIdMggFAAAg");
	this.shape.setTransform(127.1,33.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("AwBEPIAAodMAgEAAAIAAIdg");
	this.shape_1.setTransform(127.1,33.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.not_found, new cjs.Rectangle(22.5,5,209.6,56.2), null);


(lib.sage_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("אחד מצמחי המרפא והתבלין העתיקים והנפוצים ביותר בארץ ישראל ובאזורי צמחייה ים תיכוניים", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 332;
	this.text.parent = this;
	this.text.setTransform(159.65,-21.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A6OkdMA0dAAAIAAI7Mg0dAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A6OEeIAAo7MA0dAAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sage_small_info, new cjs.Rectangle(-173.9,-29.6,342.9,76.9), null);


(lib.mint_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("שייך למשפחה השפתניים וכולל 30 מינים שונים, מתוכם רק ארבעה גדלים בארץ", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 332;
	this.text.parent = this;
	this.text.setTransform(157.65,-21.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A6OkdMA0dAAAIAAI7Mg0dAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A6OEeIAAo7MA0dAAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mint_small_info, new cjs.Rectangle(-175.9,-29.6,344.9,76.9), null);


(lib.melissa_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text(".המין היחיד שגדל בארץ הוא מליסה רפואית\nעלי הצמח מחוספסים ושעירים במקצת", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 253;
	this.text.parent = this;
	this.text.setTransform(127.65,-20.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A1fkdMAq/AAAIAAI7Mgq/AAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A1fEeIAAo7MAq/AAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.melissa_small_info, new cjs.Rectangle(-138.6,-29.6,277.29999999999995,59.2), null);


(lib.louise_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("שייכת למשפחת ההורבניים (צמחים בעלי פרחים) הכוללת 35 מינים שונים, המוכר ביותר הוא לואיזה לימונית", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 332;
	this.text.parent = this;
	this.text.setTransform(165.65,-21.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A8QkdMA4hAAAIAAI7Mg4hAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A8QEeIAAo7MA4hAAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.louise_small_info, new cjs.Rectangle(-181.9,-29.6,363.9,76.9), null);


(lib.garenium_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("פרח סגול יפה וקטן שמגיע בתפרחות ומשמש בגינה בעיקר למשיכת דבורים ומאביקים אחרים", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 332;
	this.text.parent = this;
	this.text.setTransform(163.65,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A7AkdMA2BAAAIAAI7Mg2BAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A7AEeIAAo7MA2BAAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.garenium_small_info, new cjs.Rectangle(-173.9,-29.6,347.9,75.9), null);


(lib.exit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(7,1,1).p("AByirIhyCrIB1CqAh0iqIB0CqIhxCs");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("AiVDIIAAmPIErAAIAAGPg");
	this.shape_1.setTransform(0,-0.25);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.exit, new cjs.Rectangle(-15.1,-20.7,30.299999999999997,41.4), null);


(lib.big_sage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_110();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_sage, new cjs.Rectangle(0,0,458.5,460), null);


(lib.big_mint = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_497();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_mint, new cjs.Rectangle(0,0,238.5,381.5), null);


(lib.big_mellissa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_496();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_mellissa, new cjs.Rectangle(0,0,215.5,356.5), null);


(lib.big_luoisa = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_495();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_luoisa, new cjs.Rectangle(0,0,264,352), null);


(lib.big_garenium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_472();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.big_garenium, new cjs.Rectangle(0,0,315.5,409), null);


(lib.throat_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("מחלה דלקתית זיהומית של חלל הפה והשקדים", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 294;
	this.text.parent = this;
	this.text.setTransform(132.65,-11.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A1fkdMAq/AAAIAAI7Mgq/AAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A1fEeIAAo7MAq/AAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.throat_small_info, new cjs.Rectangle(-163,-29.6,301.7,63.6), null);


(lib.teeth_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("הצטברות חיידקים ואבנית בחלל הפה", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 219;
	this.text.parent = this;
	this.text.setTransform(107.7,-11.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("AyEkdMAkJAAAIAAI7MgkJAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("AyEEeIAAo7MAkJAAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.teeth_small_info, new cjs.Rectangle(-116.6,-29.6,233.3,63.6), null);


(lib.stress_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text(".מצב בו כמות הלחצים גבוהה מכמות המשאבים הרגשיים שיש לנו על מנת להתמודד עמם", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 294;
	this.text.parent = this;
	this.text.setTransform(135.65,-21.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A2bkdMAs3AAAIAAI7Mgs3AAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A2bEeIAAo7MAs3AAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stress_small_info, new cjs.Rectangle(-160,-29.6,304.6,59.2), null);


(lib.stomach_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text(",בטן נפוחה לאחר שתייה ואכילה ברוב שעות היום\n.לרוב מלווה בתחושת כבדות ואי נוחות ", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 279;
	this.text.parent = this;
	this.text.setTransform(137.35,-21.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A26kdMAt1AAAIAAI7Mgt1AAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A26EeIAAo7MAt1AAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stomach_small_info, new cjs.Rectangle(-147.6,-29.6,295.29999999999995,59.2), null);


(lib.sleep_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("מצב של שינה לא תקינה בלילה שגורמת לעייפות ותפקוד לקוי במהלך היום", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 230;
	this.text.parent = this;
	this.text.setTransform(114.65,-21.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A0FkdMAoLAAAIAAI7MgoLAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A0FEeIAAo7MAoLAAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sleep_small_info, new cjs.Rectangle(-129.6,-29.6,259.29999999999995,59.2), null);


(lib.head_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text(".אחת מהבעיות הרפואיות השכיחות ביותר\nכאב ראש שחוזר לעיתים תכופות עשוי להצביע על בעיה רפואית חמורה יותר", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 276;
	this.text.parent = this;
	this.text.setTransform(131.65,-35.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A03mLMApvAAAIAAMXMgpvAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A03GMIAAsXMApvAAAIAAMXg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head_small_info, new cjs.Rectangle(-145.9,-40.6,280.6,96.80000000000001), null);


(lib.fire_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text(",תחושת צריבה כואבת בוושט מעט מתחת לעצם החזה", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 311;
	this.text.parent = this;
	this.text.setTransform(152.6,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A4dkJMAw7AAAIAAITMgw7AAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A4dEKIAAoTMAw7AAAIAAITg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fire_small_info, new cjs.Rectangle(-160,-27.6,317.6,55.2), null);


(lib.eye_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("דלקת הנגרמת על ידי חיידק, נגיף או תגובה אלרגית", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 294;
	this.text.parent = this;
	this.text.setTransform(146.05,-11.95);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A3rkdMAvXAAAIAAI7MgvXAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A3rEeIAAo7MAvXAAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_small_info, new cjs.Rectangle(-152.6,-29.6,305.29999999999995,63.6), null);


(lib.ear_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("נגרמת מזיהום באוזן ומתבטאת בכאבים בחלקה הפנימי של האוזן ולעיתים מקרינה לראש", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 311;
	this.text.parent = this;
	this.text.setTransform(149.6,-21.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A4dkJMAw7AAAIAAITMgw7AAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A4dEKIAAoTMAw7AAAIAAITg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ear_small_info, new cjs.Rectangle(-163,-27.6,320.6,55.2), null);


(lib.acne_small_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.text = new cjs.Text("דלקת של בלוטות החלב וזקיקי השערות", "16px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 230;
	this.text.parent = this;
	this.text.setTransform(113.65,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("A0FkdMAoLAAAIAAI7MgoLAAAg");
	this.shape.setTransform(0.025,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADDB9").s().p("A0FEeIAAo7MAoLAAAIAAI7g");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.acne_small_info, new cjs.Rectangle(-129.6,-29.6,259.29999999999995,63.2), null);


(lib.woman_body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.אישה();
	this.instance.setTransform(0,0,1.1558,1.046);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman_body, new cjs.Rectangle(0,0,178,546), null);


(lib.sage_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_471();
	this.instance.setTransform(-253.25,-162.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_35();
	this.instance_1.setTransform(-124.7,-22.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sage_icon, new cjs.Rectangle(-253.2,-162.6,454,432.70000000000005), null);


(lib.mint_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_470();
	this.instance.setTransform(-119.2,-190.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_33();
	this.instance_1.setTransform(-140.95,-224.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mint_icon, new cjs.Rectangle(-140.9,-224.9,279,426), null);


(lib.Melissa_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_469();
	this.instance.setTransform(-107.6,-178.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_31();
	this.instance_1.setTransform(-130.95,-197.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Melissa_icon, new cjs.Rectangle(-130.9,-197.9,282,397), null);


(lib.louise_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_468();
	this.instance.setTransform(-131.95,-176,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_29();
	this.instance_1.setTransform(-148.95,-201.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.louise_icon, new cjs.Rectangle(-148.9,-201.9,302,396), null);


(lib.garenium_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_467();
	this.instance.setTransform(-134.4,-204.45,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_27();
	this.instance_1.setTransform(-163.95,-232.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.garenium_icon, new cjs.Rectangle(-163.9,-232.9,374,444), null);


(lib.water = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_466();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.water, new cjs.Rectangle(0,0,178.5,151.5), null);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_465();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sun, new cjs.Rectangle(0,0,210,197), null);


(lib.planting = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_464();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.planting, new cjs.Rectangle(0,0,167.5,140.5), null);


(lib.throat_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_463();
	this.instance.setTransform(-109.55,-140.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_22();
	this.instance_1.setTransform(-117.15,-143.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.throat_icon, new cjs.Rectangle(-117.1,-143.9,232,285.5), null);


(lib.Teeth_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_462();
	this.instance.setTransform(-123.6,-106.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(-123.45,-108.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Teeth_icon, new cjs.Rectangle(-123.6,-108.9,247.5,216), null);


(lib.stress_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_461();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_18();
	this.instance_1.setTransform(-6,1.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stress_icon, new cjs.Rectangle(-6,0,186,227.5), null);


(lib.stomach_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_460();
	this.instance.setTransform(747.35,223.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_16();
	this.instance_1.setTransform(740.9,223,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stomach_icon, new cjs.Rectangle(740.9,223,66.5,62.5), null);


(lib.sleep_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_459();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(-6,-4.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sleep_icon, new cjs.Rectangle(-6,-4.9,269,253), null);


(lib.Head_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_458();
	this.instance.setTransform(-118.6,-125.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(-124.05,-130.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Head_icon, new cjs.Rectangle(-124,-130.3,252,258), null);


(lib.fire_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_457();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(2.05,-1.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fire_icon, new cjs.Rectangle(0,-1.9,116.5,218), null);


(lib.eye_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_456();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-9,1.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_icon, new cjs.Rectangle(-9,0,293,174.5), null);


(lib.Ear_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_455();
	this.instance.setTransform(-79.8,-124.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_6();
	this.instance_1.setTransform(-120.05,-133,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ear_icon, new cjs.Rectangle(-120,-133,211.5,262.5), null);


(lib.Acne_icon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-113.3,-132.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(-152.5,-149.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Acne_icon, new cjs.Rectangle(-152.5,-149.4,303,303), null);


(lib.water_med = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF4").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.3,-7.3,14.7,14.7);


(lib.water_high = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhIhIICRAAIAACRIiRAAg");
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAF4").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-8.3,16.6,16.700000000000003);


(lib.muata = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhIhIICRAAIAACRIiRAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAF4").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-8.3,16.700000000000003,16.700000000000003);


(lib.light_med = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhIhIICRAAIAACRIiRAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAF4").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-8.3,16.700000000000003,16.700000000000003);


(lib.light_less = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhIhIICRAAIAACRIiRAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAF4").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-8.3,16.700000000000003,16.700000000000003);


(lib.light_high = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhIhIICRAAIAACRIiRAAg");
	this.shape.setTransform(-0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAF4").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape_1.setTransform(-0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.3,-8.3,16.6,16.700000000000003);


(lib.check_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhTAWIA3A7IBwih");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBJIAAiRICSAAIAACRg");
	this.shape_1.setTransform(-2.95,3.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.check_6, new cjs.Rectangle(-10.3,-9.1,19.700000000000003,19.7), null);


(lib.check_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhTAWIA3A7IBwih");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape_1.setTransform(-2.875,2.775);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.check_5, new cjs.Rectangle(-10.2,-9.1,19.6,19.2), null);


(lib.check_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhTAWIA3A7IBwih");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape_1.setTransform(-3.125,2.725);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.check_4, new cjs.Rectangle(-10.4,-9.1,19.8,19.2), null);


(lib.check_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhTAWIA3A7IBwih");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape_1.setTransform(-2.75,3.325);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.check_3, new cjs.Rectangle(-10,-9.1,19.4,19.799999999999997), null);


(lib.check_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhTAWIA3A7IBwih");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape_1.setTransform(-2.875,2.625);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.check_2, new cjs.Rectangle(-10.2,-9.1,19.6,19.1), null);


(lib.check_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhTAWIA3A7IBwih");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhIBJIAAiRICRAAIAACRg");
	this.shape_1.setTransform(-2.475,2.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.check_1, new cjs.Rectangle(-9.8,-9.1,19.200000000000003,18.799999999999997), null);


(lib.linkHit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 211;
	this.text.parent = this;
	this.text.setTransform(118.3,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ATxhtIAADvAAFhzIAADvAzwiBIAADv");
	this.shape.setTransform(4.5,212);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADCBA").s().p("AwwCkIAAlHMAhhAAAIAAFHg");
	this.shape_1.setTransform(118.3,16.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.linkHit, new cjs.Rectangle(-123,0,348.6,226), null);


(lib.hit_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hit_logo_new();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CADCBA").s().p("EjBvB/0MAAAj/nMGDfAAAMAAAD/ng");
	this.shape.setTransform(1240,818);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2480,1636);


(lib.aboutus_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("אודות ", "35px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(7,-18.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("AK8F/I13AAQh/AAhZhwQhahxAAieQAAidBahxQBahwB+AAIV3AAQB/AABaBwQBZBxAACdQAACehZBxQhaBwh/AAg");
	this.shape.setTransform(8,-0.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADCBA").s().p("Aq6F/QiAAAhZhwQhahxAAieQAAidBahxQBahwB/AAIV1AAQCAAABZBwQBaBxAACdQAACehaBxQhZBwiAAAg");
	this.shape_1.setTransform(8,-0.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aboutus_btn, new cjs.Rectangle(-93.6,-39.5,203.2,78.6), null);


(lib.throat_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.red_dot();
	this.instance.setTransform(12,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.throat_dot, new cjs.Rectangle(0,0,24,24), null);


(lib.teeth_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.red_dot();
	this.instance.setTransform(12,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.teeth_dot, new cjs.Rectangle(0,0,24,24), null);


(lib.stomach_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.red_dot();
	this.instance.setTransform(12,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stomach_dot, new cjs.Rectangle(0,0,24,24), null);


(lib.head_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.red_dot();
	this.instance.setTransform(12,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.head_dot, new cjs.Rectangle(0,0,24,24), null);


(lib.fire_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.red_dot();
	this.instance.setTransform(12,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fire_dot, new cjs.Rectangle(0,0,24,24), null);


(lib.eye_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.red_dot();
	this.instance.setTransform(12,12,1,1,0,0,0,12,12);

	this.instance_1 = new lib.red_dot();
	this.instance_1.setTransform(36,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye_dot, new cjs.Rectangle(0,0,48,24), null);


(lib.ear_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.red_dot();
	this.instance.setTransform(12,12,1,1,0,0,0,12,12);

	this.instance_1 = new lib.red_dot();
	this.instance_1.setTransform(64,12,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ear_dot, new cjs.Rectangle(0,0,76,24), null);


(lib.allbody_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.red_dot();
	this.instance.setTransform(76,36,1,1,0,0,0,12,12);

	this.instance_1 = new lib.red_dot();
	this.instance_1.setTransform(126,38,1,1,0,0,0,12,12);

	this.instance_2 = new lib.red_dot();
	this.instance_2.setTransform(106,12,1,1,0,0,0,12,12);

	this.instance_3 = new lib.red_dot();
	this.instance_3.setTransform(136,146.05,1,1,0,0,0,12,12);

	this.instance_4 = new lib.red_dot();
	this.instance_4.setTransform(38,136.05,1,1,0,0,0,12,12);

	this.instance_5 = new lib.red_dot();
	this.instance_5.setTransform(90,156.05,1,1,0,0,0,12,12);

	this.instance_6 = new lib.red_dot();
	this.instance_6.setTransform(12,302.05,1,1,0,0,0,12,12);

	this.instance_7 = new lib.red_dot();
	this.instance_7.setTransform(148,308.1,1,1,0,0,0,12,12);

	this.instance_8 = new lib.red_dot();
	this.instance_8.setTransform(64,398.1,1,1,0,0,0,12,12);

	this.instance_9 = new lib.red_dot();
	this.instance_9.setTransform(102,400.1,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.allbody_dot, new cjs.Rectangle(0,0,160,412.1), null);


(lib.acne_dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.red_dot();
	this.instance.setTransform(7.4,3.75,0.0794,0.1458,0,0,0,12,12);

	this.instance_1 = new lib.red_dot();
	this.instance_1.setTransform(15.45,12.65,0.1251,0.1789,0,0,0,12,12);

	this.instance_2 = new lib.red_dot();
	this.instance_2.setTransform(20.35,5.25,0.1667,0.125,0,0,0,12,12);

	this.instance_3 = new lib.red_dot();
	this.instance_3.setTransform(1,5.55,0.0833,0.1,0,0,180,12,12);

	this.instance_4 = new lib.red_dot();
	this.instance_4.setTransform(12.95,1,0.0833,0.0833,0,0,0,12,12);

	this.instance_5 = new lib.red_dot();
	this.instance_5.setTransform(12.5,17.05,0.1208,0.1625,0,0,0,12,12);

	this.instance_6 = new lib.red_dot();
	this.instance_6.setTransform(19.6,11.75,0.1042,0.1,0,0,0,12,12);

	this.instance_7 = new lib.red_dot();
	this.instance_7.setTransform(6.35,8.65,0.1666,0.1583,0,0,0,12,12);

	this.instance_8 = new lib.red_dot();
	this.instance_8.setTransform(13.05,7.75,0.1667,0.1417,0,0,0,12,12);

	this.instance_9 = new lib.red_dot();
	this.instance_9.setTransform(6.25,13.65,0.1468,0.1001,0,0,180,10.9,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.acne_dot, new cjs.Rectangle(0,0,22.4,19), null);


(lib.Big_Info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.exit_big_info = new lib.exit();
	this.exit_big_info.name = "exit_big_info";
	this.exit_big_info.setTransform(-500.95,-252.9);
	new cjs.ButtonHelper(this.exit_big_info, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.exit_big_info).wait(15));

	// MergedLayer_1
	this.instance = new lib.planting();
	this.instance.setTransform(-217.9,194.05,0.4275,0.3051,0,0,0,83.8,70.2);

	this.instance_1 = new lib.sun();
	this.instance_1.setTransform(140.05,198,0.3041,0.2581,0,0,0,104.9,98.4);

	this.instance_2 = new lib.water();
	this.instance_2.setTransform(447.05,202.05,0.3954,0.2328,0,0,0,89.4,75.8);

	this.instance_3 = new lib.big_sage();
	this.instance_3.setTransform(-90.95,-166.95,0.39,0.2911,-144.8114,0,0,229.2,230.1);

	this.text = new cjs.Text("  ,לחלוט חופן עלים טריים בכוס מים רותחים\nלהשהות  כ-3 דקות ולשתות", "21px 'Assistant'");
	this.text.textAlign = "right";
	this.text.lineHeight = 31;
	this.text.lineWidth = 394;
	this.text.parent = this;
	this.text.setTransform(448.75,3.05);

	this.text_1 = new cjs.Text("עונת שתילה : חורף / אביב", "21px 'Assistant'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 31;
	this.text_1.lineWidth = 223;
	this.text_1.parent = this;
	this.text_1.setTransform(-259.6,186.25);

	this.instance_4 = new lib.CachedBmp_474();
	this.instance_4.setTransform(-116.85,164.55,0.4353,0.4353);

	this.text_2 = new cjs.Text("תנאי גידול", "bold 24px 'Assistant ExtraBold'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 33;
	this.text_2.lineWidth = 129;
	this.text_2.parent = this;
	this.text_2.setTransform(39.7,151.15);

	this.text_3 = new cjs.Text("תאורה : בינונית - גבוהה", "21px 'Assistant'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 31;
	this.text_3.lineWidth = 204;
	this.text_3.parent = this;
	this.text_3.setTransform(100,186.8);

	this.text_4 = new cjs.Text("השקיה : בינונית", "21px 'Assistant'");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 31;
	this.text_4.lineWidth = 157;
	this.text_4.parent = this;
	this.text_4.setTransform(407.6,186.8);

	this.text_5 = new cjs.Text("מרווה", "bold 50px 'Assistant ExtraBold'");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 67;
	this.text_5.lineWidth = 145;
	this.text_5.parent = this;
	this.text_5.setTransform(42.7,-237.95);

	this.instance_5 = new lib.CachedBmp_473();
	this.instance_5.setTransform(-528.6,-272.45,0.4353,0.4353);

	this.text_6 = new cjs.Text("לכתוש עלי מרווה ולהניחם על רטייה, לחבוש את הרטייה על המקום הפגוע", "21px 'Assistant'");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 31;
	this.text_6.lineWidth = 394;
	this.text_6.parent = this;
	this.text_6.setTransform(-105.85,3.05);

	this.text_7 = new cjs.Text("דלקת עיניים", "24px 'Assistant SemiBold'");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 33;
	this.text_7.lineWidth = 151;
	this.text_7.parent = this;
	this.text_7.setTransform(-104.85,-27.6);

	this.text_8 = new cjs.Text("לגרגר חליטת תה של 2-3 עלי מרווה", "21px 'Assistant'");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 31;
	this.text_8.lineWidth = 394;
	this.text_8.parent = this;
	this.text_8.setTransform(449.1,119);

	this.text_9 = new cjs.Text("דלקת חניכיים", "24px 'Assistant SemiBold'");
	this.text_9.textAlign = "right";
	this.text_9.lineHeight = 33;
	this.text_9.lineWidth = 151;
	this.text_9.parent = this;
	this.text_9.setTransform(447.75,88.35);

	this.text_10 = new cjs.Text("נפיחות בטנית", "24px 'Assistant SemiBold'");
	this.text_10.textAlign = "right";
	this.text_10.lineHeight = 33;
	this.text_10.lineWidth = 151;
	this.text_10.parent = this;
	this.text_10.setTransform(447.75,-27.85);

	this.text_11 = new cjs.Text("? לאיזה בעיות רפואיות זה עוזר", "bold 24px 'Assistant ExtraBold'");
	this.text_11.textAlign = "right";
	this.text_11.lineHeight = 33;
	this.text_11.lineWidth = 298;
	this.text_11.parent = this;
	this.text_11.setTransform(128.2,-73.2);

	this.text_12 = new cjs.Text("אחד מצמחי המרפא העתיקים והנפוצים ביותר בארץ ישראל ובאזורי צמחייה ים תיכוניים", "21px 'Assistant'");
	this.text_12.textAlign = "right";
	this.text_12.lineHeight = 30;
	this.text_12.lineWidth = 657;
	this.text_12.parent = this;
	this.text_12.setTransform(313.85,-120.55);

	this.instance_6 = new lib.CachedBmp_50();
	this.instance_6.setTransform(-536.35,-285.15,0.4353,0.4353);

	this.instance_7 = new lib.big_garenium();
	this.instance_7.setTransform(-143,-193.05,0.4471,0.4479,-74.9999,0,0,157.8,204.2);

	this.instance_8 = new lib.CachedBmp_476();
	this.instance_8.setTransform(-116.85,164.55,0.4353,0.4353);

	this.instance_9 = new lib.CachedBmp_475();
	this.instance_9.setTransform(-528.6,-277.7,0.4353,0.4353);

	this.instance_10 = new lib.big_mint();
	this.instance_10.setTransform(-124,-193.9,0.5336,0.5177,111.0217,0,0,119.2,190.7);

	this.instance_11 = new lib.CachedBmp_478();
	this.instance_11.setTransform(-116.85,164.55,0.4353,0.4353);

	this.instance_12 = new lib.CachedBmp_477();
	this.instance_12.setTransform(-528.6,-256.35,0.4353,0.4353);

	this.instance_13 = new lib.big_luoisa();
	this.instance_13.setTransform(-130,-197.9,0.4467,0.4758,-37.4979,0,0,131.9,176);

	this.instance_14 = new lib.CachedBmp_480();
	this.instance_14.setTransform(-116.85,164.55,0.4353,0.4353);

	this.instance_15 = new lib.CachedBmp_479();
	this.instance_15.setTransform(-528.6,-257.65,0.4353,0.4353);

	this.instance_16 = new lib.big_mellissa();
	this.instance_16.setTransform(-126,-198,0.5729,0.4592,-36.4525,0,0,107.7,178);

	this.instance_17 = new lib.CachedBmp_482();
	this.instance_17.setTransform(-116.85,164.55,0.4353,0.4353);

	this.instance_18 = new lib.CachedBmp_481();
	this.instance_18.setTransform(-528.6,-257.65,0.4353,0.4353);

	this.instance_19 = new lib.CachedBmp_58();
	this.instance_19.setTransform(53.2,-57.95,0.4353,0.4353);

	this.instance_20 = new lib.CachedBmp_484();
	this.instance_20.setTransform(-107.45,150.95,0.4353,0.4353);

	this.instance_21 = new lib.CachedBmp_56();
	this.instance_21.setTransform(-91.6,-57.95,0.4353,0.4353);

	this.instance_22 = new lib.CachedBmp_483();
	this.instance_22.setTransform(-225.95,-252.8,0.4353,0.4353);

	this.instance_23 = new lib.CachedBmp_103();
	this.instance_23.setTransform(-536.35,-280.8,0.4353,0.4353);

	this.instance_24 = new lib.CachedBmp_102();
	this.instance_24.setTransform(-23.25,33.8,0.4353,0.4353);

	this.instance_25 = new lib.CachedBmp_63();
	this.instance_25.setTransform(53.2,-57.95,0.4353,0.4353);

	this.instance_26 = new lib.CachedBmp_62();
	this.instance_26.setTransform(-91.6,-57.95,0.4353,0.4353);

	this.instance_27 = new lib.CachedBmp_485();
	this.instance_27.setTransform(-225.8,-252.65,0.4353,0.4353);

	this.instance_28 = new lib.CachedBmp_68();
	this.instance_28.setTransform(53.2,-57.95,0.4353,0.4353);

	this.instance_29 = new lib.CachedBmp_67();
	this.instance_29.setTransform(-91.6,-57.95,0.4353,0.4353);

	this.instance_30 = new lib.CachedBmp_486();
	this.instance_30.setTransform(-186.95,-253.35,0.4353,0.4353);

	this.instance_31 = new lib.CachedBmp_74();
	this.instance_31.setTransform(-0.45,148.3,0.4353,0.4353);

	this.instance_32 = new lib.CachedBmp_73();
	this.instance_32.setTransform(53.2,-71,0.4353,0.4353);

	this.instance_33 = new lib.CachedBmp_72();
	this.instance_33.setTransform(-91.6,-71,0.4353,0.4353);

	this.instance_34 = new lib.CachedBmp_487();
	this.instance_34.setTransform(-186.85,-253.35,0.4353,0.4353);

	this.instance_35 = new lib.CachedBmp_79();
	this.instance_35.setTransform(53.2,-105.8,0.4353,0.4353);

	this.instance_36 = new lib.CachedBmp_78();
	this.instance_36.setTransform(-91.6,-105.8,0.4353,0.4353);

	this.instance_37 = new lib.CachedBmp_488();
	this.instance_37.setTransform(-150.55,-263.1,0.4353,0.4353);

	this.instance_38 = new lib.CachedBmp_490();
	this.instance_38.setTransform(-125.1,144.05,0.4353,0.4353);

	this.instance_39 = new lib.CachedBmp_84();
	this.instance_39.setTransform(53.2,-81.15,0.4353,0.4353);

	this.instance_40 = new lib.CachedBmp_83();
	this.instance_40.setTransform(-91.6,-81.15,0.4353,0.4353);

	this.instance_41 = new lib.CachedBmp_489();
	this.instance_41.setTransform(-150.55,-254,0.4353,0.4353);

	this.instance_42 = new lib.CachedBmp_90();
	this.instance_42.setTransform(53.2,-72.45,0.4353,0.4353);

	this.instance_43 = new lib.CachedBmp_89();
	this.instance_43.setTransform(-91.6,-72.45,0.4353,0.4353);

	this.instance_44 = new lib.CachedBmp_491();
	this.instance_44.setTransform(-186.85,-253.35,0.4353,0.4353);

	this.instance_45 = new lib.CachedBmp_96();
	this.instance_45.setTransform(-16.85,95.95,0.4353,0.4353);

	this.instance_46 = new lib.CachedBmp_95();
	this.instance_46.setTransform(53.2,-72.45,0.4353,0.4353);

	this.instance_47 = new lib.CachedBmp_94();
	this.instance_47.setTransform(-91.6,-72.45,0.4353,0.4353);

	this.instance_48 = new lib.CachedBmp_492();
	this.instance_48.setTransform(-186.85,-253.35,0.4353,0.4353);

	this.instance_49 = new lib.CachedBmp_101();
	this.instance_49.setTransform(53.2,-72.45,0.4353,0.4353);

	this.instance_50 = new lib.CachedBmp_100();
	this.instance_50.setTransform(-91.6,-72.45,0.4353,0.4353);

	this.instance_51 = new lib.CachedBmp_493();
	this.instance_51.setTransform(-186.85,-253.35,0.4353,0.4353);

	this.instance_52 = new lib.CachedBmp_98();
	this.instance_52.setTransform(-536.35,-280.8,0.4353,0.4353);

	this.instance_53 = new lib.CachedBmp_106();
	this.instance_53.setTransform(53.2,-72.45,0.4353,0.4353);

	this.instance_54 = new lib.CachedBmp_105();
	this.instance_54.setTransform(-91.6,-72.45,0.4353,0.4353);

	this.instance_55 = new lib.CachedBmp_494();
	this.instance_55.setTransform(-186.85,-253.35,0.4353,0.4353);

	this.instance_56 = new lib.CachedBmp_102copy2();
	this.instance_56.setTransform(-23.25,33.8,0.4353,0.4353);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.text_12,p:{x:313.85,y:-120.55,text:"אחד מצמחי המרפא העתיקים והנפוצים ביותר בארץ ישראל ובאזורי צמחייה ים תיכוניים",lineWidth:657}},{t:this.text_11},{t:this.text_10,p:{text:"נפיחות בטנית",x:447.75}},{t:this.text_9,p:{y:88.35,text:"דלקת חניכיים",x:447.75}},{t:this.text_8,p:{y:119,text:"לגרגר חליטת תה של 2-3 עלי מרווה",x:449.1,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.text_7,p:{text:"דלקת עיניים",lineWidth:151,x:-104.85,y:-27.6,font:"24px 'Assistant SemiBold'",lineHeight:33.4}},{t:this.text_6,p:{text:"לכתוש עלי מרווה ולהניחם על רטייה, לחבוש את הרטייה על המקום הפגוע",x:-105.85,y:3.05,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.instance_5},{t:this.text_5,p:{x:42.7,y:-237.95,text:"מרווה",font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:145}},{t:this.text_4,p:{text:"השקיה : בינונית",x:407.6,lineWidth:157,y:186.8,font:"21px 'Assistant'",lineHeight:30.5}},{t:this.text_3,p:{text:"תאורה : בינונית - גבוהה",x:100,y:186.8,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:204}},{t:this.text_2,p:{x:39.7,y:151.15,text:"תנאי גידול",font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:129}},{t:this.instance_4},{t:this.text_1,p:{text:"עונת שתילה : חורף / אביב",x:-259.6,y:186.25,lineWidth:223,font:"21px 'Assistant'",lineHeight:30.5}},{t:this.text,p:{text:"  ,לחלוט חופן עלים טריים בכוס מים רותחים\nלהשהות  כ-3 דקות ולשתות",x:448.75,y:3.05,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.instance_3,p:{regX:229.2,scaleX:0.39,scaleY:0.2911,rotation:-144.8114,x:-90.95,y:-166.95,regY:230.1,skewX:0,skewY:0}},{t:this.instance_2,p:{regX:89.4,regY:75.8,scaleX:0.3954,scaleY:0.2328,x:447.05,y:202.05}},{t:this.instance_1,p:{regX:104.9,scaleY:0.2581,x:140.05,y:198,scaleX:0.3041}},{t:this.instance,p:{scaleX:0.4275,scaleY:0.3051,x:-217.9,y:194.05,regX:83.8}}]}).to({state:[{t:this.instance_6},{t:this.text_12,p:{x:323.9,y:-114.75,text:"פרח סגול יפה וקטן שמגיע בתפרחות ומשמש בגינה בעיקר למשיכת דבורים ומאביקים אחרים",lineWidth:697}},{t:this.text_11},{t:this.text_10,p:{text:"דלקות עיניים",x:447.75}},{t:this.text_9,p:{y:69.5,text:"צרבת",x:447.75}},{t:this.text_8,p:{y:100.15,text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:449.1,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.text_7,p:{text:"אקנה",lineWidth:151,x:-104.85,y:-27.6,font:"24px 'Assistant SemiBold'",lineHeight:33.4}},{t:this.text_6,p:{text:"טפטוף שמן גרניום על האזור הפגוע. כדי להכין את השמן יש להכניס חופן עלים טריים גרוסים לפיסת בד ולסחוט אותם היטב עד לקבלת השמן. ניתן לשמור בקירור עד חצי שנה",x:-105.85,y:3.05,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.instance_9},{t:this.text_5,p:{x:53.95,y:-272.6,text:"גרניום לימוני",font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:145}},{t:this.text_4,p:{text:"השקיה : מועטה",x:407.6,lineWidth:157,y:186.8,font:"21px 'Assistant'",lineHeight:30.5}},{t:this.text_3,p:{text:"תאורה : בינונית",x:100,y:186.8,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:204}},{t:this.text_2,p:{x:39.7,y:151.15,text:"תנאי גידול",font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:129}},{t:this.instance_8},{t:this.text_1,p:{text:"עונת שתילה :רבת שנתי",x:-259.6,y:186.25,lineWidth:223,font:"21px 'Assistant'",lineHeight:30.5}},{t:this.text,p:{text:"יש לטבול פיסת בד בחליטת גרניום ולהניח על העיניים",x:448.75,y:3.05,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.instance_7,p:{regX:157.8,scaleX:0.4471,scaleY:0.4479,rotation:-74.9999,x:-143,y:-193.05,regY:204.2}},{t:this.instance_2,p:{regX:89.5,regY:76,scaleX:0.4181,scaleY:0.2964,x:444.1,y:201.1}},{t:this.instance_1,p:{regX:105,scaleY:0.2526,x:133.05,y:201,scaleX:0.3041}},{t:this.instance,p:{scaleX:0.363,scaleY:0.3343,x:-226.95,y:198,regX:83.8}}]},1).to({state:[{t:this.instance_6},{t:this.text_12,p:{x:303.9,y:-119.6,text:"שייך למשפחת השפתניים וכולל 30 מינים שונים, מתוכם רק ארבעה גדלים בר בארץ",lineWidth:632}},{t:this.text_11},{t:this.text_10,p:{text:"צרבת",x:452.1}},{t:this.text_9,p:{y:69.5,text:"נפיחות בטנית ",x:452.1}},{t:this.text_8,p:{y:100.15,text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:449.1,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.text_7,p:{text:"כאבי ראש",lineWidth:151,x:-104.85,y:-27.6,font:"24px 'Assistant SemiBold'",lineHeight:33.4}},{t:this.instance_12},{t:this.text_6,p:{text:"נענע",x:36.55,y:-231.05,font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:145}},{t:this.text_5,p:{x:407.6,y:186.8,text:"השקיה : גבוהה",font:"21px 'Assistant'",lineHeight:30.5,lineWidth:157}},{t:this.text_4,p:{text:"תאורה : גבוהה",x:100,lineWidth:204,y:186.8,font:"21px 'Assistant'",lineHeight:30.5}},{t:this.text_3,p:{text:"תנאי גידול",x:39.7,y:151.15,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:129}},{t:this.instance_11},{t:this.text_2,p:{x:-259.6,y:186.25,text:"עונת שתילה : רת שנתי",font:"21px 'Assistant'",lineHeight:30.5,lineWidth:223}},{t:this.text_1,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:448.75,y:3.05,lineWidth:394,font:"21px 'Assistant'",lineHeight:30.5}},{t:this.text,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:-107,y:1.6,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.instance_10,p:{regX:119.2,regY:190.7,scaleX:0.5336,scaleY:0.5177,rotation:111.0217,x:-124,y:-193.9}},{t:this.instance_2,p:{regX:89.5,regY:75.6,scaleX:0.3729,scaleY:0.3122,x:436.1,y:200.05}},{t:this.instance_1,p:{regX:104.9,scaleY:0.2332,x:136.05,y:201.05,scaleX:0.3136}},{t:this.instance,p:{scaleX:0.3552,scaleY:0.2594,x:-224.95,y:200,regX:83.8}}]},1).to({state:[{t:this.instance_6},{t:this.text_12,p:{x:303.9,y:-113.6,text:"שייכת למשפחת ההורבניים הכולל 35 מינים שונים,  המוכר ביותר הוא לואיזה לימונית",lineWidth:632}},{t:this.text_11},{t:this.text_10,p:{text:"כאבי גרון ",x:452.1}},{t:this.text_9,p:{y:69.5,text:"נפיחות בטנית ",x:452.1}},{t:this.text_8,p:{y:100.15,text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:449.1,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.text_7,p:{text:"חרדה",lineWidth:180,x:-104.85,y:-27.6,font:"24px 'Assistant SemiBold'",lineHeight:33.4}},{t:this.instance_15},{t:this.text_6,p:{text:"לואיזה",x:53.95,y:-229.6,font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:145}},{t:this.text_5,p:{x:407.6,y:186.8,text:"השקיה : גבוהה",font:"21px 'Assistant'",lineHeight:30.5,lineWidth:157}},{t:this.text_4,p:{text:"תאורה : גבוהה",x:100,lineWidth:204,y:186.8,font:"21px 'Assistant'",lineHeight:30.5}},{t:this.text_3,p:{text:"תנאי גידול",x:39.7,y:151.15,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:129}},{t:this.instance_14},{t:this.text_2,p:{x:-259.6,y:186.25,text:"עונת שתילה : אביב",font:"21px 'Assistant'",lineHeight:30.5,lineWidth:223}},{t:this.text_1,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:448.75,y:3.05,lineWidth:394,font:"21px 'Assistant'",lineHeight:30.5}},{t:this.text,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:-107,y:1.6,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.instance_13,p:{regY:176,scaleX:0.4467,scaleY:0.4758,rotation:-37.4979,x:-130,y:-197.9,regX:131.9}},{t:this.instance_2,p:{regX:89.3,regY:75.6,scaleX:0.4625,scaleY:0.2989,x:429.05,y:200.05}},{t:this.instance_1,p:{regX:105,scaleY:0.2942,x:135.1,y:197.05,scaleX:0.3231}},{t:this.instance,p:{scaleX:0.379,scaleY:0.2958,x:-219.9,y:201,regX:83.5}}]},1).to({state:[{t:this.instance_6},{t:this.text_12,p:{x:493.7,y:-116.5,text:"המין היחיד הגדל בר בארץ הוא מליסה רפואית. גובהו הוא עד מטר אחד, אך לרוב הצמח נמוך יותר ועליו מחוספסים ושעירים במקצת",lineWidth:987}},{t:this.text_11},{t:this.text_10,p:{text:"נדודי שינה",x:452.1}},{t:this.text_9,p:{y:69.5,text:"צרבות",x:452.1}},{t:this.text_8,p:{y:100.15,text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:449.1,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.text_7,p:{text:"חרדה",lineWidth:180,x:-104.85,y:-27.6,font:"24px 'Assistant SemiBold'",lineHeight:33.4}},{t:this.instance_18},{t:this.text_6,p:{text:"מליסה",x:53.95,y:-229.6,font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:145}},{t:this.text_5,p:{x:407.6,y:186.8,text:"השקיה : בינוני",font:"21px 'Assistant'",lineHeight:30.5,lineWidth:157}},{t:this.text_4,p:{text:"תאורה : בינוני",x:100,lineWidth:204,y:186.8,font:"21px 'Assistant'",lineHeight:30.5}},{t:this.text_3,p:{text:"תנאי גידול",x:39.7,y:151.15,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:129}},{t:this.instance_17},{t:this.text_2,p:{x:-259.6,y:186.25,text:"עונת שתילה : אביב / סתיו",font:"21px 'Assistant'",lineHeight:30.5,lineWidth:223}},{t:this.text_1,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:448.75,y:3.05,lineWidth:394,font:"21px 'Assistant'",lineHeight:30.5}},{t:this.text,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:-107,y:1.6,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:394}},{t:this.instance_16,p:{regY:178,scaleX:0.5729,scaleY:0.4592,rotation:-36.4525,x:-126,y:-198,regX:107.7}},{t:this.instance_2,p:{regX:89.5,regY:75.6,scaleX:0.4668,scaleY:0.2837,x:442.15,y:202}},{t:this.instance_1,p:{regX:104.9,scaleY:0.2586,x:136.05,y:200.05,scaleX:0.3136}},{t:this.instance,p:{scaleX:0.4275,scaleY:0.3051,x:-218.9,y:202.05,regX:83.8}}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.text_8,p:{y:-119.35,text:"בטן נפוחה לאחר שתייה ואכילה ברב שעות היום, לרב מלווה בתחושת כבדות ואי נוחות",x:369.4,font:"24px 'Assistant'",lineHeight:33.4,lineWidth:734}},{t:this.text_7,p:{text:"תסמינים",lineWidth:99,x:39.7,y:-67.4,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4}},{t:this.instance_22},{t:this.text_6,p:{text:"נפיחות בטנית",x:119.7,y:-230.45,font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:298}},{t:this.instance_21},{t:this.text_5,p:{x:131.4,y:-33.7,text:"תחושה של אי נוחות בבטן וגזים",font:"23px 'Assistant'",lineHeight:32.1,lineWidth:274}},{t:this.text_4,p:{text:" ?איזה צמחים עוזרים",x:98.85,lineWidth:213,y:22.65,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4}},{t:this.text_3,p:{text:"מרווה",x:281.45,y:148.4,font:"24px 'Assistant'",lineHeight:33.4,lineWidth:61}},{t:this.text_2,p:{x:36.05,y:149.85,text:"לואיזה",font:"24px 'Assistant'",lineHeight:33.4,lineWidth:61}},{t:this.text_1,p:{text:"נענע",x:-207.2,y:148.4,lineWidth:47,font:"24px 'Assistant'",lineHeight:33.4}},{t:this.instance_20},{t:this.text,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:308.25,y:193.95,font:"23px 'Assistant'",lineHeight:32.1,lineWidth:628}},{t:this.instance_19},{t:this.instance_3,p:{regX:229,scaleX:0.3513,scaleY:0.1798,rotation:-145.5641,x:234.05,y:116.95,regY:230.1,skewX:0,skewY:0}},{t:this.instance_13,p:{regY:175.9,scaleX:0.4081,scaleY:0.3415,rotation:-75,x:28.05,y:115,regX:131.9}},{t:this.instance_10,p:{regX:119.3,regY:190.8,scaleX:0.3631,scaleY:0.3602,rotation:97.5504,x:-229.95,y:110.05}}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.text_6,p:{text:"תסמינים",x:39.7,y:-67.4,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:99}},{t:this.instance_27},{t:this.text_5,p:{x:106.65,y:-231.9,text:"דלקת חניכיים",font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:298}},{t:this.instance_26},{t:this.text_4,p:{text:" ?איזה צמחים עוזרים",x:98.85,lineWidth:213,y:27,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4}},{t:this.text_3,p:{text:"מרווה",x:31.7,y:142.2,font:"24px 'Assistant'",lineHeight:33.4,lineWidth:61}},{t:this.text_2,p:{x:308.25,y:188.15,text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",font:"23px 'Assistant'",lineHeight:32.1,lineWidth:628}},{t:this.instance_25},{t:this.text_1,p:{text:"אדמומית, נפיחות בחניכיים, דימום בזמן צחצוח, טעם רע וריח רע מהפה",x:322.85,y:-36,lineWidth:617,font:"24px 'Assistant'",lineHeight:33.4}},{t:this.text,p:{text:"הצטברות חיידקים ואבנית בחלל הפה",x:152.65,y:-117.85,font:"24px 'Assistant'",lineHeight:33.4,lineWidth:332}},{t:this.instance_3,p:{regX:229,scaleX:0.3675,scaleY:0.1963,rotation:0,x:4,y:113,regY:230.2,skewX:-3.9708,skewY:176.0381}}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.text_6,p:{text:"תסמינים",x:39.7,y:-67.4,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:99}},{t:this.instance_30},{t:this.text_5,p:{x:87.8,y:-231.9,text:"דלקת גרון",font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:298}},{t:this.instance_29},{t:this.text_4,p:{text:" ?איזה צמחים עוזרים",x:98.85,lineWidth:213,y:19.75,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4}},{t:this.instance_28},{t:this.text_3,p:{text:"כאבי גרון, קושי בבליעה, שיעול וצרידות",x:162.65,y:-37.7,font:"23px 'Assistant'",lineHeight:32.1,lineWidth:326}},{t:this.text_2,p:{x:204.05,y:-116.4,text:"מחלה דלקתית זיהומית של חלל הלוע ושל השקדים",font:"24px 'Assistant'",lineHeight:33.4,lineWidth:452}},{t:this.text_1,p:{text:"לואיזה",x:27.55,y:134.95,lineWidth:61,font:"24px 'Assistant'",lineHeight:33.4}},{t:this.text,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:299.75,y:179.05,font:"23px 'Assistant'",lineHeight:32.1,lineWidth:628}},{t:this.instance_13,p:{regY:176,scaleX:0.3526,scaleY:0.4231,rotation:-75.003,x:17.1,y:96.9,regX:131.9}}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.text_7,p:{text:"תסמינים",lineWidth:99,x:39.7,y:-80.45,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4}},{t:this.instance_34},{t:this.text_6,p:{text:"לחץ וסטרס",x:97.95,y:-234.8,font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:298}},{t:this.instance_33},{t:this.text_5,p:{x:98.85,y:24.1,text:" ?איזה צמחים עוזרים",font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:213}},{t:this.instance_32},{t:this.text_4,p:{text:"כל אדם יחווה לחץ וסטרס באופן שונה- עייפות וקשיי שינה, כאבים בגוף, מועקה בחזה, חרדה, דיכאון וקשיי תפקוד",x:458.4,lineWidth:926,y:-44.6,font:"23px 'Assistant'",lineHeight:32.1}},{t:this.text_3,p:{text:"מצב בו כמות הלחצים גבוהה מכמות המשאבים הרגשיים שיש לנו על מנת להתמודד עמם",x:375.65,y:-136.5,font:"24px 'Assistant'",lineHeight:33.4,lineWidth:775}},{t:this.text_2,p:{x:213.15,y:148,text:"לואיזה",font:"24px 'Assistant'",lineHeight:33.4,lineWidth:61}},{t:this.text_1,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:299.75,y:186.3,lineWidth:628,font:"23px 'Assistant'",lineHeight:32.1}},{t:this.instance_31},{t:this.text,p:{text:"מליסה",x:-138.8,y:146.8,font:"24px 'Assistant'",lineHeight:33.4,lineWidth:61}},{t:this.instance_13,p:{regY:176.1,scaleX:0.4019,scaleY:0.4231,rotation:-83.9681,x:192.1,y:105.1,regX:131.8}},{t:this.instance_16,p:{regY:178.2,scaleX:0.4447,scaleY:0.3491,rotation:-81.4871,x:-166.9,y:101.1,regX:107.7}}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.text_6,p:{text:"תסמינים",x:39.7,y:-115.25,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:99}},{t:this.instance_37},{t:this.text_5,p:{x:44.05,y:-248.95,text:"אקנה",font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:126}},{t:this.instance_36},{t:this.text_4,p:{text:" ?איזה צמחים עוזרים",x:98.85,lineWidth:213,y:-25.2,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4}},{t:this.instance_35},{t:this.text_3,p:{text:"פצעונים על גבי העור בדרך כלל באזור הפנים אך יכול להופיע גם בכתפיים, גב עליון וחזה",x:351.4,y:-78.35,font:"23px 'Assistant'",lineHeight:32.1,lineWidth:732}},{t:this.text_2,p:{x:172.8,y:-168.4,text:"דלקת של בלוטות החלב וזקיקי השערות",font:"24px 'Assistant'",lineHeight:33.4,lineWidth:352}},{t:this.text_1,p:{text:"טפטוף שמן גרניום על האזור הפגוע. כדי להכין את השמן יש להכניס חופן עלים טריים .גרוסים לפיסת בד ולסחוט אותם היטב עד לקבלת השמן. ניתן לשמור בקירור עד חצי שנה",x:352.7,y:154.05,lineWidth:743,font:"23px 'Assistant'",lineHeight:33.1}},{t:this.text,p:{text:"גרניום לימוני",x:55.9,y:109.95,font:"24px 'Assistant'",lineHeight:33.4,lineWidth:118}},{t:this.instance_7,p:{regX:157.6,scaleX:0.2966,scaleY:0.4713,rotation:-83.2491,x:-5.95,y:66.95,regY:204.2}}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.text_8,p:{y:-90.6,text:"תסמינים",x:39.7,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:99}},{t:this.instance_41},{t:this.text_7,p:{text:"צרבת",lineWidth:129,x:39.7,y:-231.15,font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4}},{t:this.instance_40},{t:this.text_6,p:{text:" ?איזה צמחים עוזרים",x:98.85,y:-6.35,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:213}},{t:this.instance_39},{t:this.text_5,p:{x:242.3,y:-55.15,text:"הבחילה היא בעצם התסמין עצמו, תחושה של רצון להקיא",font:"23px 'Assistant'",lineHeight:32.1,lineWidth:470}},{t:this.text_4,p:{text:"תחושת מחנק וחוסר נוחות בחלקו העליון של חלל הבטן (בדרך כלל בקיבה), היוצרת דחף להקיא",x:408.9,lineWidth:826,y:-145.7,font:"24px 'Assistant'",lineHeight:33.4}},{t:this.text_3,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:299.85,y:186.9,font:"23px 'Assistant'",lineHeight:33.1,lineWidth:598}},{t:this.text_2,p:{x:32.45,y:140.75,text:"מליסה",font:"24px 'Assistant'",lineHeight:33.4,lineWidth:70}},{t:this.text_1,p:{text:"גרניום לימוני",x:291,y:140.75,lineWidth:118,font:"24px 'Assistant'",lineHeight:33.4}},{t:this.text,p:{text:"נענע",x:-202.7,y:144.05,font:"24px 'Assistant'",lineHeight:33.4,lineWidth:47}},{t:this.instance_38},{t:this.instance_7,p:{regX:157.7,scaleX:0.3786,scaleY:0.3651,rotation:-90,x:229.05,y:82,regY:204.5}},{t:this.instance_16,p:{regY:178.2,scaleX:0.4991,scaleY:0.4137,rotation:-81.9428,x:-1.95,y:87.1,regX:107.5}},{t:this.instance_10,p:{regX:119.3,regY:190.8,scaleX:0.4578,scaleY:0.4072,rotation:104.9992,x:-212.05,y:94}}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.text_6,p:{text:"תסמינים",x:39.7,y:-81.9,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:99}},{t:this.instance_44},{t:this.text_5,p:{x:86.35,y:-231.9,text:"כאבי ראש",font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:298}},{t:this.instance_43},{t:this.text_4,p:{text:" ?איזה צמחים עוזרים",x:98.85,lineWidth:213,y:8.15,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4}},{t:this.instance_42},{t:this.text_3,p:{text:"כאב בעוצמה משתנה באזור המצח או הרקות ולעיתים עשוי להתגבר בעת תזוזה או רעש",x:359.4,y:-41.75,font:"23px 'Assistant'",lineHeight:32.1,lineWidth:727}},{t:this.text_2,p:{x:502.05,y:-136.7,text:"אחת מהבעיות השכיחות ביותר ולעיתים, כאב ראש שחוזר לעיתים תכופות עשוי להצביע על בעיה רפואית חמורה יותר",font:"24px 'Assistant'",lineHeight:33.4,lineWidth:1002}},{t:this.text_1,p:{text:"נענע",x:20.3,y:139.3,lineWidth:46,font:"24px 'Assistant'",lineHeight:33.4}},{t:this.text,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:299.75,y:179.05,font:"23px 'Assistant'",lineHeight:32.1,lineWidth:628}},{t:this.instance_10,p:{regX:119.3,regY:190,scaleX:0.381,scaleY:0.4454,rotation:104.6718,x:4.1,y:92}}]},1).to({state:[{t:this.instance_24},{t:this.instance_23},{t:this.text_8,p:{y:-81.9,text:"תסמינים",x:39.7,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:99}},{t:this.instance_48},{t:this.text_7,p:{text:"דלקת עיניים",lineWidth:298,x:105.85,y:-242.4,font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4}},{t:this.instance_47},{t:this.text_6,p:{text:" ?איזה צמחים עוזרים",x:98.85,y:8.15,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:213}},{t:this.instance_46},{t:this.text_5,p:{x:280.55,y:-40.65,text:"העין אדמומית, דומעת, רגישה, כואבת או מגרדת ומפרישה הפרשה צמיגה",font:"23px 'Assistant'",lineHeight:32.1,lineWidth:607}},{t:this.text_4,p:{text:"דלקת הנגרמת על ידי חיידק, נגף או תגובה אלרגית",x:196.2,lineWidth:445,y:-131,font:"24px 'Assistant'",lineHeight:33.4}},{t:this.instance_45},{t:this.text_3,p:{text:"מרווה",x:-253.95,y:122.55,font:"23px 'Assistant'",lineHeight:32.1,lineWidth:51}},{t:this.text_2,p:{x:284.65,y:123.35,text:"גרניום לימוני",font:"23px 'Assistant'",lineHeight:32.1,lineWidth:107}},{t:this.text_1,p:{text:"יש לטבול פיסת בד בחליטת גרניום ולהניח על העיניים",x:446.2,y:152.95,lineWidth:411,font:"23px 'Assistant'",lineHeight:32.1}},{t:this.text,p:{text:"לכתוש עלי מרווה ולהניחם על רטייה, לחבוש את הרטייה במקום הכאוב",x:-37.85,y:155.15,font:"23px 'Assistant'",lineHeight:32.1,lineWidth:451}},{t:this.instance_7,p:{regX:157.2,scaleX:0.2915,scaleY:0.42,rotation:-84.4938,x:233.2,y:78.1,regY:205}},{t:this.instance_3,p:{regX:229.2,scaleX:0.3607,scaleY:0.2003,rotation:0,x:-270.3,y:89.45,regY:230,skewX:0,skewY:180}}]},1).to({state:[{t:this.instance_24},{t:this.instance_52},{t:this.text_6,p:{text:"תסמינים",x:39.7,y:-81.9,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:99}},{t:this.instance_51},{t:this.text_5,p:{x:98.35,y:-242.4,text:"נדודי שינה",font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:298}},{t:this.instance_50},{t:this.text_4,p:{text:" ?איזה צמחים עוזרים",x:98.85,lineWidth:213,y:8.15,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4}},{t:this.instance_49},{t:this.text_3,p:{text:"קושי להירדם, שינה לא רציפה, התעוררות מוקדמת, עייפות מוגברת גם לאחר מספר סביר של שעות שינה",x:410.4,y:-40.65,font:"23px 'Assistant'",lineHeight:32.1,lineWidth:855}},{t:this.text_2,p:{x:297.65,y:-131,text:"מצב של שינה לא תקינה בלילה בגורמת לעייפות ולתפקוד לקוי במהלך היום",font:"24px 'Assistant'",lineHeight:33.4,lineWidth:658}},{t:this.text_1,p:{text:"מליסה",x:43.7,y:153.95,lineWidth:56,font:"23px 'Assistant'",lineHeight:32.1}},{t:this.instance_16,p:{regY:178.1,scaleX:0.4991,scaleY:0.4991,rotation:-84.9748,x:9.65,y:99.75,regX:107.5}},{t:this.text,p:{text:"לחלוט חופן עליים טריים בכוס מים רותחים, להשהות כ – 3 דקות ולשתות",x:278.05,y:188.05,font:"21px 'Assistant'",lineHeight:30.5,lineWidth:544}}]},1).to({state:[{t:this.instance_56},{t:this.instance_23},{t:this.text_6,p:{text:"תסמינים",x:39.7,y:-81.9,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4,lineWidth:99}},{t:this.instance_55},{t:this.text_5,p:{x:116.35,y:-242.4,text:"דלקת אוזניים",font:"bold 50px 'Assistant ExtraBold'",lineHeight:67.4,lineWidth:298}},{t:this.instance_54},{t:this.text_4,p:{text:" ?איזה צמחים עוזרים",x:98.85,lineWidth:213,y:8.15,font:"bold 24px 'Assistant ExtraBold'",lineHeight:33.4}},{t:this.instance_53},{t:this.text_3,p:{text:"כאבים באוזן הפנימים ובמגע כם באפרכסת, ייתכנו הפרשות מתוך האוזן",x:287.25,y:-40.65,font:"23px 'Assistant'",lineHeight:32.1,lineWidth:594}},{t:this.text_2,p:{x:371.6,y:-131,text:"נגרמת מזיהום באוזן ומתבטאת בכאבים בחלקה הפנימי של האוזן ולעיתים מקרינה לראש",font:"24px 'Assistant'",lineHeight:33.4,lineWidth:757}},{t:this.text_1,p:{text:"גרניום לימוני",x:47.65,y:149.9,lineWidth:107,font:"23px 'Assistant'",lineHeight:32.1}},{t:this.instance_7,p:{regX:157.6,scaleX:0.2865,scaleY:0.3508,rotation:-75.0015,x:-4.95,y:98.05,regY:204.2}},{t:this.text,p:{text:"לחלוט חופן עלים טריים בכוס מים רותחים, לטבול פיסת בד ולהניח בתעלת האוזן",x:393.85,y:184,font:"24px 'Arial'",lineHeight:30.25,lineWidth:820}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-536.3,-300.4,1072.9,718.2);


(lib.orange_filter_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.light_high = new lib.light_high();
	this.light_high.name = "light_high";
	this.light_high.setTransform(-49.95,13.5);
	new cjs.ButtonHelper(this.light_high, 0, 1, 1);

	this.light_med = new lib.light_med();
	this.light_med.name = "light_med";
	this.light_med.setTransform(31,13.5);
	new cjs.ButtonHelper(this.light_med, 0, 1, 1);

	this.light_less = new lib.light_less();
	this.light_less.name = "light_less";
	this.light_less.setTransform(105.25,13.05);
	new cjs.ButtonHelper(this.light_less, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.light_less},{t:this.light_med},{t:this.light_high}]}).wait(1));

	// squares
	this.text = new cjs.Text("גבוהה", "18px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 46;
	this.text.parent = this;
	this.text.setTransform(-78.45,6.7);

	this.text_1 = new cjs.Text("בינונית", "18px 'Assistant'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 46;
	this.text_1.parent = this;
	this.text_1.setTransform(-2.9,6.2);

	this.text_2 = new cjs.Text("נמוכה", "18px 'Assistant'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 26;
	this.text_2.lineWidth = 46;
	this.text_2.parent = this;
	this.text_2.setTransform(73.95,5.7);

	this.text_3 = new cjs.Text("בחר צמחים לפי רמת תאורה", "18px 'Assistant'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 26;
	this.text_3.lineWidth = 210;
	this.text_3.parent = this;
	this.text_3.setTransform(-0.1913,-48,1.0385,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AGWhbIAAC4AmVhcIAAC4");
	this.shape.setTransform(2.7,13.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-184.75,-66.7,0.4798,0.4798);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(101.5,79.5,0.4798,0.4798);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.orange_filter_bg, new cjs.Rectangle(-184.7,-66.7,375.2,167.3), null);


(lib.green_filter_bg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.water_high = new lib.water_high();
	this.water_high.name = "water_high";
	this.water_high.setTransform(-66.95,16.5);
	new cjs.ButtonHelper(this.water_high, 0, 1, 1);

	this.water_med = new lib.water_med();
	this.water_med.name = "water_med";
	this.water_med.setTransform(15,15.5);
	new cjs.ButtonHelper(this.water_med, 0, 1, 1);

	this.muata = new lib.muata();
	this.muata.name = "muata";
	this.muata.setTransform(93,15.5);
	new cjs.ButtonHelper(this.muata, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AhIhIICRAAIAACRIiRAAg");
	this.shape.setTransform(15.025,15.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.muata},{t:this.water_med},{t:this.water_high}]}).wait(1));

	// Layer_3
	this.text = new cjs.Text("בחר צמחים לפי רמת השקיה", "18px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 195;
	this.text.parent = this;
	this.text.setTransform(-10.3,-32.4);

	this.text_1 = new cjs.Text("מרובה", "18px 'Assistant'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 26;
	this.text_1.lineWidth = 46;
	this.text_1.parent = this;
	this.text_1.setTransform(-98,8.45);

	this.text_2 = new cjs.Text("בינונית", "18px 'Assistant'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 26;
	this.text_2.lineWidth = 46;
	this.text_2.parent = this;
	this.text_2.setTransform(-19.45,7.95);

	this.text_3 = new cjs.Text("מועטה", "18px 'Assistant'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 26;
	this.text_3.lineWidth = 46;
	this.text_3.parent = this;
	this.text_3.setTransform(59.4,7.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AGWhWIAAC4AmVhhIAAC4");
	this.shape_1.setTransform(-11.85,14.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-179.8,-66.1,0.4581,0.4581);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.green_filter_bg, new cjs.Rectangle(-179.8,-66.1,345,132.89999999999998), null);


(lib.aboutus_info = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.linkHit.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://www.hit.ac.il/", "_blank");
			stage.cursor = "pointer";
			
		}
		
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.hit_logo.addEventListener("click", fl_ClickToGoToWebPage_3);
		
		function fl_ClickToGoToWebPage_3() {
			window.open("http://www.hit.ac.il/", "_blank");
			stage.cursor = "pointer";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.exit_aboutus = new lib.exit();
	this.exit_aboutus.name = "exit_aboutus";
	this.exit_aboutus.setTransform(-286.35,-209.2);
	new cjs.ButtonHelper(this.exit_aboutus, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.exit_aboutus).wait(1));

	// Layer_1
	this.text = new cjs.Text("תש\"פ, 2020", "20px 'Assistant'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 93;
	this.text.parent = this;
	this.text.setTransform(229.55,53.6);

	this.text_1 = new cjs.Text("מנחות: מיטל אמזלג ונגה רזניק", "20px 'Assistant'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 230;
	this.text_1.parent = this;
	this.text_1.setTransform(160,25.6);

	this.text_2 = new cjs.Text("-'שנה א", "20px 'Assistant'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 28;
	this.text_2.lineWidth = 60;
	this.text_2.parent = this;
	this.text_2.setTransform(244,-1.35);

	this.hit_logo = new lib.hit_logo();
	this.hit_logo.name = "hit_logo";
	this.hit_logo.setTransform(-94.9,69.75,0.0661,0.0701);
	new cjs.ButtonHelper(this.hit_logo, 0, 1, 1);

	this.linkHit = new lib.linkHit();
	this.linkHit.name = "linkHit";
	this.linkHit.setTransform(95.85,13.05,1,1,0,0,0,107.3,16.4);
	new cjs.ButtonHelper(this.linkHit, 0, 1, 1);

	this.text_3 = new cjs.Text("עדי גולדשטיין", "20px 'Assistant'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 28;
	this.text_3.lineWidth = 108;
	this.text_3.parent = this;
	this.text_3.setTransform(185.05,200.65);

	this.text_4 = new cjs.Text("יובל אהרון", "20px 'Assistant'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 28;
	this.text_4.lineWidth = 95;
	this.text_4.parent = this;
	this.text_4.setTransform(58.3,200.65);

	this.text_5 = new cjs.Text("נועה יום טוב", "20px 'Assistant'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 28;
	this.text_5.lineWidth = 95;
	this.text_5.parent = this;
	this.text_5.setTransform(-69.35,200.65);

	this.text_6 = new cjs.Text("רותם פרידמן", "20px 'Assistant'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 28;
	this.text_6.lineWidth = 95;
	this.text_6.parent = this;
	this.text_6.setTransform(-199.4,200.65);

	this.text_7 = new cjs.Text("הופק במגרת קורס \"ארגון וייצוג ידע\" וקורס \"מבוא לתכנות אינטראקציה ואנימציה\"", "20px 'Assistant'");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 28;
	this.text_7.lineWidth = 541;
	this.text_7.parent = this;
	this.text_7.setTransform(272.3,-74.5);

	this.text_8 = new cjs.Text(".ייצוג אינטראקטיבי להסבר סגולות רפואיות של צמחי תבלין ", "20px 'Assistant'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 28;
	this.text_8.lineWidth = 421;
	this.text_8.parent = this;
	this.text_8.setTransform(64.25,-106);

	this.text_9 = new cjs.Text(",במקום לקחת עוד נורופן הגיע הזמן לנסות את הדרך הטבעית", "20px 'Assistant'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 28;
	this.text_9.lineWidth = 443;
	this.text_9.parent = this;
	this.text_9.setTransform(0.75,-152.1);

	this.text_10 = new cjs.Text("כאב ראש כאב ראש כאב ראש", "20px 'Assistant'");
	this.text_10.textAlign = "center";
	this.text_10.lineHeight = 28;
	this.text_10.lineWidth = 215;
	this.text_10.parent = this;
	this.text_10.setTransform(9.75,-173.55);

	this.text_11 = new cjs.Text("אודות ", "bold 35px 'Assistant'");
	this.text_11.textAlign = "center";
	this.text_11.lineHeight = 48;
	this.text_11.lineWidth = 100;
	this.text_11.parent = this;
	this.text_11.setTransform(1.55,-227.45);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg0Ggm8MBoNAAAMAAABN5MhoNAAAg");
	this.shape.setTransform(0.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CADCBA").s().p("Eg0GAm9MAAAhN5MBoNAAAMAAABN5g");
	this.shape_1.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_11},{t:this.text_10},{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.linkHit},{t:this.hit_logo},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.aboutus_info, new cjs.Rectangle(-334.5,-250.2,669.1,500.5), null);


// stage content:
(lib.Sgulot_Adi_Yuval_Noa_Rotem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		
		stage.enableMouseOver(24);
		
		//מעבר עכבר על כאב ראש//
		self.head_icon.addEventListener("mouseover", overHead_icon);
		self.head_icon.addEventListener("mouseout", outHead_icon);
		self.haed_txt.addEventListener("mouseover", overHead_txt);
		self.haed_txt.addEventListener("mouseout", outHead_txt);
		
		//מעבר עכבר על כאב אוזניים//
		self.ear_icon.addEventListener("mouseover", overEar_icon);
		self.ear_icon.addEventListener("mouseout", outEar_icon);
		self.ear_txt.addEventListener("mouseover", overEar_txt);
		self.ear_txt.addEventListener("mouseout", outEar_txt);
		
		//מעבר עכבר על דלקת גרון//
		self.throat_icon.addEventListener("mouseover", overThroat_icon);
		self.throat_icon.addEventListener("mouseout", outThroat_icon);
		self.throat_txt.addEventListener("mouseover", overThroat_txt);
		self.throat_txt.addEventListener("mouseout", outThroat_txt);
		
		//מעבר עכבר על נפיחות ביטנית//
		self.stomach_icon.addEventListener("mouseover", overStomach_icon);
		self.stomach_icon.addEventListener("mouseout", outStomach_icon);
		self.stomach_txt.addEventListener("mouseover", overStomach_txt);
		self.stomach_txt.addEventListener("mouseout", outStomach_txt);
		
		//מעבר על חרדה//
		self.stress_icon.addEventListener("mouseover", overStress_icon);
		self.stress_icon.addEventListener("mouseout", outStress_icon);
		self.strees_txt.addEventListener("mouseover", overStrees_txt);
		self.strees_txt.addEventListener("mouseout", outStrees_txt);
		
		//מעבר על דלקת עיניים//
		self.eye_icon.addEventListener("mouseover", overEye_icon);
		self.eye_icon.addEventListener("mouseout", outEye_icon);
		self.eye_txt.addEventListener("mouseover", overEye_txt);
		self.eye_txt.addEventListener("mouseout", outEye_txt);
		
		//מעבר עכבר על דלקת חניכיים//
		self.teeth_icon.addEventListener("mouseover", overTeeth_icon);
		self.teeth_icon.addEventListener("mouseout", outTeeth_icon);
		self.teeth_txt.addEventListener("mouseover", overTeeth_txt);
		self.teeth_txt.addEventListener("mouseout", outTeeth_txt);
		
		//מעבר עכבר על צרבות//
		self.fire_icon.addEventListener("mouseover", overFire_icon);
		self.fire_icon.addEventListener("mouseout", outFire_icon);
		self.fire_txt.addEventListener("mouseover", overFire_txt);
		self.fire_txt.addEventListener("mouseout", outFire_txt);
		
		//מעבר עכבר על נדודי שינה//
		self.sleep_icon.addEventListener("mouseover", overSleep_icon);
		self.sleep_icon.addEventListener("mouseout", outSleep_icon);
		self.sleep_txt.addEventListener("mouseover", overSleep_txt);
		self.sleep_txt.addEventListener("mouseout", outSleep_txt);
		
		//מעבר עכבר על אקנה//
		self.acne_icon.addEventListener("mouseover", overAcne_icon);
		self.acne_icon.addEventListener("mouseout", outAcne_icon);
		self.acne_txt.addEventListener("mouseover", overAcne_txt);
		self.acne_txt.addEventListener("mouseout", outAcne_txt);
		
		//מעבר עכבר על גרניום//
		self.garenium_icon.addEventListener("mouseover", overGarenium_icon);
		self.garenium_icon.addEventListener("mouseout", outGarenium_icon);
		self.garenium_txt.addEventListener("mouseover", overGarenium_txt);
		self.garenium_txt.addEventListener("mouseout", outGarenium_txt);
		
		//מעבר עכבר על מרווה//
		self.sage_icon.addEventListener("mouseover", overSage_icon);
		self.sage_icon.addEventListener("mouseout", outSage_icon);
		self.sage_txt.addEventListener("mouseover", overSage_txt);
		self.sage_txt.addEventListener("mouseout", outSage_txt);
		
		//מעבר עכבר על נענע//
		self.mint_icon.addEventListener("mouseover", overMint_icon);
		self.mint_icon.addEventListener("mouseout", outMint_icon);
		self.mint_txt.addEventListener("mouseover", overMint_txt);
		self.mint_txt.addEventListener("mouseout", outMint_txt);
		
		//מעבר עכבר לואיזה//
		self.louise_icon.addEventListener("mouseover", overLouise_icon);
		self.louise_icon.addEventListener("mouseout", outLouise_icon);
		self.luoisa_txt.addEventListener("mouseover", overLuoisa_txt);
		self.luoisa_txt.addEventListener("mouseout", outLuoisa_txt);
		
		//מעבר עכבר מליסה//
		self.mellissa_icon.addEventListener("mouseover", overMellissa_icon);
		self.mellissa_icon.addEventListener("mouseout", outMellissa_icon);
		self.mellissa_txt.addEventListener("mouseover", overMellissa_txt);
		self.mellissa_txt.addEventListener("mouseout", outMellissa_txt);
		
		//פילטר השקיה//
		self.green_filter_bg.muata.addEventListener("click", muataFilter);
		self.check_1.addEventListener("click", check_1Filter);
		self.green_filter_bg.water_med.addEventListener("click", watermedFilter);
		self.check_2.addEventListener("click", check_2Filter);
		self.green_filter_bg.water_high.addEventListener("click", waterhighFilter);
		self.check_3.addEventListener("click", check_3Filter);
		
		//פילטר תאורה//
		self.orange_filter_bg.light_less.addEventListener("click", lightlessFilter);
		self.check_4.addEventListener("click", check_4Filter);
		self.orange_filter_bg.light_med.addEventListener("click", lightmedFilter);
		self.check_5.addEventListener("click", check_5Filter);
		self.orange_filter_bg.light_high.addEventListener("click", lighthighdFilter);
		self.check_6.addEventListener("click", check_6Filter);
		
		//הסתרת כרטיסיית מידע גדולה//
		self.big_info.visible = false;
		
		//הסתרת נקודות//
		self.head_dot.visible = false;
		self.allbody_dot.visible = false;
		self.eye_dot.visible = false;
		self.ear_dot.visible = false;
		self.teeth_dot.visible = false;
		self.throat_dot.visible = false;
		self.fire_dot.visible = false;
		self.stomach_dot.visible = false;
		self.acne_dot.visible = false;
		
		//הסתרת מידע קטן כאבים//
		self.haed_small_info.visible = false;
		self.ear_small_info.visible = false;
		self.throat_small_info.visible = false;
		self.stomach_small_info.visible = false;
		self.stress_small_info.visible = false;
		self.eye_small_info.visible = false;
		self.teeth_small_info.visible = false;
		self.fire_small_info.visible = false;
		self.sleep_small_info.visible = false;
		self.acne_small_info.visible = false;
		self.not_found.visible = false;
		
		//הסתרת מידע קטן צמחים//
		self.garenium_small_info.visible = false;
		self.sage_small_info.visible = false;
		self.mint_small_info.visible = false;
		self.louise_small_info.visible = false;
		self.melissa_small_info.visible = false;
		
		//הסתרת כרטיסיית אודות//
		self.about_us_info.visible = false;
		
		//הסתרת חצים//
		self.check_1.visible = false;
		self.check_2.visible = false;
		self.check_3.visible = false;
		self.check_4.visible = false;
		self.check_5.visible = false;
		self.check_6.visible = false;
		
		//שקיפות אייקונים + טקסט//
		function fadeAll() {
			self.head_icon.alpha = 0.3;
			self.ear_icon.alpha = 0.3;
			self.throat_icon.alpha = 0.3;
			self.stomach_icon.alpha = 0.3;
			self.stress_icon.alpha = 0.3;
			self.eye_icon.alpha = 0.3;
			self.teeth_icon.alpha = 0.3;
			self.fire_icon.alpha = 0.3;
			self.sleep_icon.alpha = 0.3;
			self.acne_icon.alpha = 0.3;
			self.garenium_icon.alpha = 0.3;
			self.sage_icon.alpha = 0.3;
			self.mint_icon.alpha = 0.3;
			self.louise_icon.alpha = 0.3;
			self.mellissa_icon.alpha = 0.3;
			self.haed_txt.alpha = 0.3;
			self.ear_txt.alpha = 0.3;
			self.throat_txt.alpha = 0.3;
			self.stomach_txt.alpha = 0.3;
			self.strees_txt.alpha = 0.3;
			self.eye_txt.alpha = 0.3;
			self.teeth_txt.alpha = 0.3;
			self.fire_txt.alpha = 0.3;
			self.sleep_txt.alpha = 0.3;
			self.acne_txt.alpha = 0.3;
			self.garenium_txt.alpha = 0.3;
			self.sage_txt.alpha = 0.3;
			self.mint_txt.alpha = 0.3;
			self.mellissa_txt.alpha = 0.3;
			self.luoisa_txt.alpha = 0.3;
		
		}
		
		//הדגשת אייקונים + טקסט//
		function boldAll() {
			self.head_icon.alpha = 1;
			self.ear_icon.alpha = 1;
			self.throat_icon.alpha = 1;
			self.stomach_icon.alpha = 1;
			self.stress_icon.alpha = 1;
			self.eye_icon.alpha = 1;
			self.teeth_icon.alpha = 1;
			self.fire_icon.alpha = 1;
			self.sleep_icon.alpha = 1;
			self.acne_icon.alpha = 1;
			self.garenium_icon.alpha = 1;
			self.sage_icon.alpha = 1;
			self.mint_icon.alpha = 1;
			self.louise_icon.alpha = 1;
			self.mellissa_icon.alpha = 1;
			self.haed_txt.alpha = 1;
			self.ear_txt.alpha = 1;
			self.throat_txt.alpha = 1;
			self.stomach_txt.alpha = 1;
			self.strees_txt.alpha = 1;
			self.eye_txt.alpha = 1;
			self.teeth_txt.alpha = 1;
			self.fire_txt.alpha = 1;
			self.sleep_txt.alpha = 1;
			self.acne_txt.alpha = 1;
			self.garenium_txt.alpha = 1;
			self.sage_txt.alpha = 1;
			self.mint_txt.alpha = 1;
			self.mellissa_txt.alpha = 1;
			self.luoisa_txt.alpha = 1;
		
		}
		
		//הסתרת כלל האובייקטים//
		function hideAll() {
			self.head_icon.visible = false;
			self.ear_icon.visible = false;
			self.throat_icon.visible = false;
			self.stomach_icon.visible = false;
			self.stress_icon.visible = false;
			self.eye_icon.visible = false;
			self.teeth_icon.visible = false;
			self.fire_icon.visible = false;
			self.sleep_icon.visible = false;
			self.acne_icon.visible = false;
			self.garenium_icon.visible = false;
			self.sage_icon.visible = false;
			self.mint_icon.visible = false;
			self.louise_icon.visible = false;
			self.mellissa_icon.visible = false;
			self.haed_txt.visible = false;
			self.ear_txt.visible = false;
			self.throat_txt.visible = false;
			self.stomach_txt.visible = false;
			self.strees_txt.visible = false;
			self.eye_txt.visible = false;
			self.teeth_txt.visible = false;
			self.fire_txt.visible = false;
			self.sleep_txt.visible = false;
			self.acne_txt.visible = false;
			self.garenium_txt.visible = false;
			self.sage_txt.visible = false;
			self.mint_txt.visible = false;
			self.mellissa_txt.visible = false;
			self.luoisa_txt.visible = false;
		
		}
		
		//הצגת כלל האובייקטים//
		function showAll() {
			self.head_icon.visible = true;
			self.ear_icon.visible = true;
			self.throat_icon.visible = true;
			self.stomach_icon.visible = true;
			self.stress_icon.visible = true;
			self.eye_icon.visible = true;
			self.teeth_icon.visible = true;
			self.fire_icon.visible = true;
			self.sleep_icon.visible = true;
			self.acne_icon.visible = true;
			self.garenium_icon.visible = true;
			self.sage_icon.visible = true;
			self.mint_icon.visible = true;
			self.louise_icon.visible = true;
			self.mellissa_icon.visible = true;
			self.haed_txt.visible = true;
			self.ear_txt.visible = true;
			self.throat_txt.visible = true;
			self.stomach_txt.visible = true;
			self.strees_txt.visible = true;
			self.eye_txt.visible = true;
			self.teeth_txt.visible = true;
			self.fire_txt.visible = true;
			self.sleep_txt.visible = true;
			self.acne_txt.visible = true;
			self.garenium_txt.visible = true;
			self.sage_txt.visible = true;
			self.mint_txt.visible = true;
			self.mellissa_txt.visible = true;
			self.luoisa_txt.visible = true;
		
		}
		
		
		//עצירת מופעי עכבר//
		function removeMouseenable() {
			self.head_icon.mouseEnabled = false;
			self.ear_icon.mouseEnabled = false;
			self.throat_icon.mouseEnabled = false;
			self.stomach_icon.mouseEnabled = false;
			self.stress_icon.mouseEnabled = false;
			self.eye_icon.mouseEnabled = false;
			self.teeth_icon.mouseEnabled = false;
			self.fire_icon.mouseEnabled = false;
			self.sleep_icon.mouseEnabled = false;
			self.acne_icon.mouseEnabled = false;
			self.garenium_icon.mouseEnabled = false;
			self.sage_icon.mouseEnabled = false;
			self.mint_icon.mouseEnabled = false;
			self.louise_icon.mouseEnabled = false;
			self.mellissa_icon.mouseEnabled = false;
			self.haed_txt.mouseEnabled = false;
			self.ear_txt.mouseEnabled = false;
			self.throat_txt.mouseEnabled = false;
			self.stomach_txt.mouseEnabled = false;
			self.strees_txt.mouseEnabled = false;
			self.eye_txt.mouseEnabled = false;
			self.teeth_txt.mouseEnabled = false;
			self.fire_txt.mouseEnabled = false;
			self.sleep_txt.mouseEnabled = false;
			self.acne_txt.mouseEnabled = false;
			self.garenium_txt.mouseEnabled = false;
			self.sage_txt.mouseEnabled = false;
			self.mint_txt.mouseEnabled = false;
			self.mellissa_txt.mouseEnabled = false;
			self.luoisa_txt.mouseEnabled = false;
			self.green_filter_bg.mouseEnabled = false;
			self.orange_filter_bg.mouseEnabled = false;
		
		}
		
		//החזרת מופעי עכבר//
		function enableMouse() {
			self.head_icon.mouseEnabled = true;
			self.ear_icon.mouseEnabled = true;
			self.throat_icon.mouseEnabled = true;
			self.stomach_icon.mouseEnabled = true;
			self.stress_icon.mouseEnabled = true;
			self.eye_icon.mouseEnabled = true;
			self.teeth_icon.mouseEnabled = true;
			self.fire_icon.mouseEnabled = true;
			self.sleep_icon.mouseEnabled = true;
			self.acne_icon.mouseEnabled = true;
			self.garenium_icon.mouseEnabled = true;
			self.sage_icon.mouseEnabled = true;
			self.mint_icon.mouseEnabled = true;
			self.louise_icon.mouseEnabled = true;
			self.mellissa_icon.mouseEnabled = true;
			self.haed_txt.mouseEnabled = true;
			self.ear_txt.mouseEnabled = true;
			self.throat_txt.mouseEnabled = true;
			self.stomach_txt.mouseEnabled = true;
			self.strees_txt.mouseEnabled = true;
			self.eye_txt.mouseEnabled = true;
			self.teeth_txt.mouseEnabled = true;
			self.fire_txt.mouseEnabled = true;
			self.sleep_txt.mouseEnabled = true;
			self.acne_txt.mouseEnabled = true;
			self.garenium_txt.mouseEnabled = true;
			self.sage_txt.mouseEnabled = true;
			self.mint_txt.mouseEnabled = true;
			self.mellissa_txt.mouseEnabled = true;
			self.luoisa_txt.mouseEnabled = true;
			self.green_filter_bg.mouseEnabled = true;
			self.orange_filter_bg.mouseEnabled = true;
		
		}
		
		//שקיפות לאייקונים בהופעת כרטיסייה גדולה//
		function fadeBiginfo() {
			self.aboutus_btn.alpha = 0.3;
			self.header_txt.alpha = 0.3;
			self.instruction_txt.alpha = 0.3;
			self.woman_body.alpha = 0.3;
		
		}
		
		//הדגשת אייקונים ביציאה מכרטיסייה גדולה//
		function boldBiginfo() {
			self.aboutus_btn.alpha = 1;
			self.header_txt.alpha = 1;
			self.instruction_txt.alpha = 1;
			self.woman_body.alpha = 1;
		
		}
		
		//כאב ראש//
		function overHead_icon() {
			fadeAll();
			self.head_icon.alpha = 1;
			self.haed_txt.alpha = 1;
			self.mint_txt.alpha = 1;
			self.mint_icon.alpha = 1;
			self.haed_small_info.visible = true;
			self.head_dot.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outHead_icon() {
			boldAll();
			self.haed_small_info.visible = false;
			self.head_dot.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		function overHead_txt() {
			fadeAll();
			self.head_icon.alpha = 1;
			self.haed_txt.alpha = 1;
			self.mint_txt.alpha = 1;
			self.mint_icon.alpha = 1;
			self.haed_small_info.visible = true;
			self.head_dot.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		
		function outHead_txt() {
			boldAll();
			self.haed_small_info.visible = false;
			self.head_dot.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		//דלקת אוזניים//
		function overEar_icon() {
			fadeAll();
			self.ear_icon.alpha = 1;
			self.ear_txt.alpha = 1;
			self.garenium_icon.alpha = 1;
			self.garenium_txt.alpha = 1;
			self.ear_dot.visible = true;
			self.ear_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		
		function outEar_icon() {
			boldAll();
			self.ear_dot.visible = false;
			self.ear_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		function overEar_txt() {
			fadeAll();
			self.ear_icon.alpha = 1;
			self.ear_txt.alpha = 1;
			self.garenium_icon.alpha = 1;
			self.garenium_txt.alpha = 1;
			self.ear_dot.visible = true;
			self.ear_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		
		
		function outEar_txt() {
			boldAll();
			self.ear_dot.visible = false;
			self.ear_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		//דלקת גרון//
		function overThroat_icon() {
			fadeAll();
			self.luoisa_txt.alpha = 1;
			self.louise_icon.alpha = 1;
			self.throat_icon.alpha = 1;
			self.throat_txt.alpha = 1;
			self.throat_small_info.visible = true;
			self.throat_dot.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		
		function outThroat_icon() {
			boldAll();
			self.throat_dot.visible = false;
			self.throat_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		
		function overThroat_txt() {
			fadeAll();
			self.luoisa_txt.alpha = 1;
			self.louise_icon.alpha = 1;
			self.throat_icon.alpha = 1;
			self.throat_txt.alpha = 1;
			self.throat_small_info.visible = true;
			self.throat_dot.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		
		function outThroat_txt() {
			boldAll();
			self.throat_dot.visible = false;
			self.throat_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		
		//נפיחות ביטנית//
		function overStomach_icon() {
			fadeAll();
			self.stomach_dot.visible = true;
			self.stomach_icon.alpha = 1;
			self.stomach_txt.alpha = 1;
			self.sage_txt.alpha = 1;
			self.mint_txt.alpha = 1;
			self.luoisa_txt.alpha = 1;
			self.sage_icon.alpha = 1;
			self.mint_icon.alpha = 1;
			self.louise_icon.alpha = 1;
			self.stomach_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outStomach_icon() {
			boldAll();
			self.stomach_dot.visible = false;
			self.stomach_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		
		function overStomach_txt() {
			fadeAll();
			self.stomach_dot.visible = true;
			self.stomach_icon.alpha = 1;
			self.stomach_txt.alpha = 1;
			self.sage_txt.alpha = 1;
			self.mint_txt.alpha = 1;
			self.luoisa_txt.alpha = 1;
			self.sage_icon.alpha = 1;
			self.mint_icon.alpha = 1;
			self.louise_icon.alpha = 1;
			self.stomach_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outStomach_txt() {
			boldAll();
			self.stomach_dot.visible = false;
			self.stomach_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		//חרדה//
		function overStrees_txt() {
			fadeAll();
			self.allbody_dot.visible = true;
			self.stress_icon.alpha = 1;
			self.strees_txt.alpha = 1;
			self.louise_icon.alpha = 1;
			self.mellissa_icon.alpha = 1;
			self.mellissa_txt.alpha = 1;
			self.luoisa_txt.alpha = 1;
			self.stress_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		function outStrees_txt() {
			boldAll();
			self.allbody_dot.visible = false;
			self.stress_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		function overStress_icon() {
			fadeAll();
			self.allbody_dot.visible = true;
			self.stress_icon.alpha = 1;
			self.strees_txt.alpha = 1;
			self.louise_icon.alpha = 1;
			self.mellissa_icon.alpha = 1;
			self.mellissa_txt.alpha = 1;
			self.luoisa_txt.alpha = 1;
			self.stress_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		function outStress_icon() {
			boldAll();
			self.allbody_dot.visible = false;
			self.stress_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		
		//דלקת עיניים//
		function overEye_icon() {
			fadeAll();
			self.eye_dot.visible = true;
			self.eye_small_info.visible = true;
			self.eye_icon.alpha = 1;
			self.eye_txt.alpha = 1;
			self.garenium_icon.alpha = 1;
			self.sage_icon.alpha = 1;
			self.garenium_txt.alpha = 1;
			self.sage_txt.alpha = 1;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		function outEye_icon() {
			boldAll();
			self.eye_dot.visible = false;
			self.eye_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		function overEye_txt() {
			fadeAll();
			self.eye_dot.visible = true;
			self.eye_small_info.visible = true;
			self.eye_icon.alpha = 1;
			self.eye_txt.alpha = 1;
			self.garenium_icon.alpha = 1;
			self.sage_icon.alpha = 1;
			self.garenium_txt.alpha = 1;
			self.sage_txt.alpha = 1;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		function outEye_txt() {
			boldAll();
			self.eye_dot.visible = false;
			self.eye_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		
		//דלקת חניכיים//
		function overTeeth_txt() {
			fadeAll();
			self.teeth_dot.visible = true;
			self.teeth_small_info.visible = true;
			self.teeth_icon.alpha = 1;
			self.teeth_txt.alpha = 1;
			self.sage_icon.alpha = 1;
			self.sage_txt.alpha = 1;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		function outTeeth_txt() {
			boldAll();
			self.teeth_dot.visible = false;
			self.teeth_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		function overTeeth_icon() {
			fadeAll();
			self.teeth_dot.visible = true;
			self.teeth_small_info.visible = true;
			self.teeth_icon.alpha = 1;
			self.teeth_txt.alpha = 1;
			self.sage_icon.alpha = 1;
			self.sage_txt.alpha = 1;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		function outTeeth_icon() {
			boldAll();
			self.teeth_dot.visible = false;
			self.teeth_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		//צרבות//
		function overFire_icon() {
			fadeAll();
			self.fire_dot.visible = true;
			self.fire_small_info.visible = true;
			self.fire_icon.alpha = 1;
			self.fire_txt.alpha = 1;
			self.garenium_icon.alpha = 1;
			self.mellissa_icon.alpha = 1;
			self.mint_icon.alpha = 1;
			self.garenium_txt.alpha = 1;
			self.mellissa_txt.alpha = 1;
			self.mint_txt.alpha = 1;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		function outFire_icon() {
			boldAll();
			self.fire_dot.visible = false;
			self.fire_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		function overFire_txt() {
			fadeAll();
			self.fire_dot.visible = true;
			self.fire_small_info.visible = true;
			self.fire_icon.alpha = 1;
			self.fire_txt.alpha = 1;
			self.garenium_icon.alpha = 1;
			self.mellissa_icon.alpha = 1;
			self.mint_icon.alpha = 1;
			self.garenium_txt.alpha = 1;
			self.mellissa_txt.alpha = 1;
			self.mint_txt.alpha = 1;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		function outFire_txt() {
			boldAll();
			self.fire_dot.visible = false;
			self.fire_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		//נדודי שינה//
		function overSleep_txt() {
			fadeAll();
			self.allbody_dot.visible = true;
			self.sleep_small_info.visible = true;
			self.sleep_icon.alpha = 1;
			self.sleep_txt.alpha = 1;
			self.mellissa_txt.alpha = 1;
			self.mellissa_icon.alpha = 1;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		function outSleep_txt() {
			boldAll();
			self.allbody_dot.visible = false;
			self.sleep_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		function overSleep_icon() {
			fadeAll();
			self.allbody_dot.visible = true;
			self.sleep_small_info.visible = true;
			self.sleep_icon.alpha = 1;
			self.sleep_txt.alpha = 1;
			self.mellissa_txt.alpha = 1;
			self.mellissa_icon.alpha = 1;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		function outSleep_icon() {
			boldAll();
			self.allbody_dot.visible = false;
			self.sleep_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		//אקנה//
		function overAcne_icon() {
			fadeAll();
			self.acne_dot.visible = true;
			self.acne_small_info.visible = true;
			self.acne_icon.alpha = 1;
			self.acne_txt.alpha = 1;
			self.garenium_icon.alpha = 1;
			self.garenium_txt.alpha = 1;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outAcne_icon() {
			boldAll();
			self.acne_dot.visible = false;
			self.acne_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		function overAcne_txt() {
			fadeAll();
			self.acne_dot.visible = true;
			self.acne_small_info.visible = true;
			self.acne_icon.alpha = 1;
			self.acne_txt.alpha = 1;
			self.garenium_icon.alpha = 1;
			self.garenium_txt.alpha = 1;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outAcne_txt() {
			boldAll();
			self.acne_dot.visible = false;
			self.acne_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		//גרניום//
		function overGarenium_icon() {
			fadeAll();
			self.garenium_icon.alpha = 1;
			self.garenium_txt.alpha = 1;
			self.acne_icon.alpha = 1;
			self.acne_txt.alpha = 1;
			self.eye_icon.alpha = 1;
			self.eye_txt.alpha = 1;
			self.fire_icon.alpha = 1;
			self.fire_txt.alpha = 1;
			self.eye_dot.visible = true;
			self.fire_dot.visible = true;
			self.acne_dot.visible = true;
			self.garenium_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outGarenium_icon() {
			boldAll();
			self.eye_dot.visible = false;
			self.fire_dot.visible = false;
			self.acne_dot.visible = false;
			self.garenium_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		
		function overGarenium_txt() {
			fadeAll();
			self.garenium_icon.alpha = 1;
			self.garenium_txt.alpha = 1;
			self.acne_icon.alpha = 1;
			self.acne_txt.alpha = 1;
			self.eye_icon.alpha = 1;
			self.eye_txt.alpha = 1;
			self.fire_icon.alpha = 1;
			self.fire_txt.alpha = 1;
			self.eye_dot.visible = true;
			self.fire_dot.visible = true;
			self.acne_dot.visible = true;
			self.garenium_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outGarenium_txt() {
			boldAll();
			self.eye_dot.visible = false;
			self.fire_dot.visible = false;
			self.acne_dot.visible = false;
			self.garenium_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		
		//מרווה//
		function overSage_icon() {
			fadeAll();
			self.sage_icon.alpha = 1;
			self.sage_txt.alpha = 1;
			self.stomach_icon.alpha = 1;
			self.stomach_txt.alpha = 1;
			self.eye_icon.alpha = 1;
			self.eye_txt.alpha = 1;
			self.teeth_icon.alpha = 1;
			self.teeth_txt.alpha = 1;
			self.eye_dot.visible = true;
			self.teeth_dot.visible = true;
			self.stomach_dot.visible = true;
			self.sage_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		}
		
		function outSage_icon() {
			boldAll();
			self.eye_dot.visible = false;
			self.teeth_dot.visible = false;
			self.stomach_dot.visible = false;
			self.sage_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		
		function overSage_txt() {
			fadeAll();
			self.sage_icon.alpha = 1;
			self.sage_txt.alpha = 1;
			self.stomach_icon.alpha = 1;
			self.stomach_txt.alpha = 1;
			self.eye_icon.alpha = 1;
			self.eye_txt.alpha = 1;
			self.teeth_icon.alpha = 1;
			self.teeth_txt.alpha = 1;
			self.eye_dot.visible = true;
			self.teeth_dot.visible = true;
			self.stomach_dot.visible = true;
			self.sage_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outSage_txt() {
			boldAll();
			self.eye_dot.visible = false;
			self.teeth_dot.visible = false;
			self.stomach_dot.visible = false;
			self.sage_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		
		}
		
		//נענע//
		function overMint_icon() {
			fadeAll();
			self.mint_icon.alpha = 1;
			self.mint_txt.alpha = 1;
			self.stomach_icon.alpha = 1;
			self.stomach_txt.alpha = 1;
			self.head_icon.alpha = 1;
			self.haed_txt.alpha = 1;
			self.fire_icon.alpha = 1;
			self.fire_txt.alpha = 1;
			self.mint_small_info.visible = true;
			self.stomach_dot.visible = true;
			self.head_dot.visible = true;
			self.fire_dot.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outMint_icon() {
			boldAll();
			self.mint_small_info.visible = false;
			self.stomach_dot.visible = false;
			self.head_dot.visible = false;
			self.fire_dot.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		
		function overMint_txt() {
			fadeAll();
			self.mint_icon.alpha = 1;
			self.mint_txt.alpha = 1;
			self.stomach_icon.alpha = 1;
			self.stomach_txt.alpha = 1;
			self.head_icon.alpha = 1;
			self.haed_txt.alpha = 1;
			self.fire_icon.alpha = 1;
			self.fire_txt.alpha = 1;
			self.mint_small_info.visible = true;
			self.stomach_dot.visible = true;
			self.head_dot.visible = true;
			self.fire_dot.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outMint_txt() {
			boldAll();
			self.mint_small_info.visible = false;
			self.stomach_dot.visible = false;
			self.head_dot.visible = false;
			self.fire_dot.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		}
		
		//לואיזה//
		function overLouise_icon() {
			fadeAll();
			self.louise_icon.alpha = 1;
			self.luoisa_txt.alpha = 1;
			self.stomach_icon.alpha = 1;
			self.stomach_txt.alpha = 1;
			self.stress_icon.alpha = 1;
			self.strees_txt.alpha = 1;
			self.throat_icon.alpha = 1;
			self.throat_txt.alpha = 1;
			self.stomach_dot.visible = true;
			self.throat_dot.visible = true;
			self.allbody_dot.visible = true;
			self.louise_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		function outLouise_icon() {
			boldAll();
			self.stomach_dot.visible = false;
			self.throat_dot.visible = false;
			self.allbody_dot.visible = false;
			self.louise_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		function overLuoisa_txt() {
			fadeAll();
			self.louise_icon.alpha = 1;
			self.luoisa_txt.alpha = 1;
			self.stomach_icon.alpha = 1;
			self.stomach_txt.alpha = 1;
			self.stress_icon.alpha = 1;
			self.strees_txt.alpha = 1;
			self.throat_icon.alpha = 1;
			self.throat_txt.alpha = 1;
			self.stomach_dot.visible = true;
			self.throat_dot.visible = true;
			self.allbody_dot.visible = true;
			self.louise_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		
		function outLuoisa_txt() {
			boldAll();
			self.stomach_dot.visible = false;
			self.throat_dot.visible = false;
			self.allbody_dot.visible = false;
			self.louise_small_info.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		
		
		}
		
		//מליסה//
		function overMellissa_icon() {
			fadeAll();
			self.mellissa_icon.alpha = 1;
			self.mellissa_txt.alpha = 1;
			self.stress_icon.alpha = 1;
			self.strees_txt.alpha = 1;
			self.fire_icon.alpha = 1;
			self.fire_txt.alpha = 1;
			self.sleep_icon.alpha = 1;
			self.sleep_txt.alpha = 1;
			self.allbody_dot.visible = true;
			self.fire_dot.visible = true;
			self.melissa_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		
		function outMellissa_icon() {
			boldAll();
			self.melissa_small_info.visible = false;
			self.allbody_dot.visible = false;
			self.fire_dot.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		
		function overMellissa_txt() {
			fadeAll();
			self.mellissa_icon.alpha = 1;
			self.mellissa_txt.alpha = 1;
			self.stress_icon.alpha = 1;
			self.strees_txt.alpha = 1;
			self.fire_icon.alpha = 1;
			self.fire_txt.alpha = 1;
			self.sleep_icon.alpha = 1;
			self.sleep_txt.alpha = 1;
			self.allbody_dot.visible = true;
			self.fire_dot.visible = true;
			self.melissa_small_info.visible = true;
			stage.cursor = "pointer";
			self.instruction_txt.text = "לחצו על הצמח או על האייקון של הכאב";
		
		}
		
		
		function outMellissa_txt() {
			boldAll();
			self.melissa_small_info.visible = false;
			self.allbody_dot.visible = false;
			self.fire_dot.visible = false;
			stage.cursor = "auto";
			self.instruction_txt.text = "עברו עם העכבר על הצמח או שם הכאב";
		}
		
		
		
		//כפתור אודות//
		self.aboutus_btn.addEventListener("click", aboutUs);
		self.about_us_info.exit_aboutus.addEventListener("click", exitAboutus);
		
		//לחיצה על כפתור אודות//
		function aboutUs() {
			self.about_us_info.visible = true;
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		
		}
		//לחיצה על איקס בחלון אודות//
		function exitAboutus() {
			self.about_us_info.visible = false;
			boldBiginfo();
			boldAll();
			enableMouse();
		}
		
		//כפתור אייקון ראש//
		self.head_icon.addEventListener("click", headIcon_btn);
		self.big_info.exit_big_info.addEventListener("click", exitHead);
		
		//לחיצה על כפתור אייקון ראש
		function headIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(11);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.haed_small_info.visible = false;
		
		}
		//לחיצה על איקס בחלונית מידע ראש//
		function exitHead() {
			self.big_info.visible = false;
			boldBiginfo();
			boldAll();
			enableMouse();
		
		}
		//כפתור טקטס ראש//
		self.haed_txt.addEventListener("click", headTxt_btn);
		
		//לחיצה על טקסט ראש//
		function headTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(11);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.haed_small_info.visible = false;
		
		}
		
		//כפתור אוזן//
		self.ear_icon.addEventListener("click", earIcon_btn);
		
		//לחיצה על אייקון אוזן//
		function earIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(14);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.ear_small_info.visible = false;
		
		}
		//כפתור טקסט אוזן//
		self.ear_txt.addEventListener("click", earTxt_btn);
		
		//לחיצה על טקסט אוזן//
		function earTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(14);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.ear_small_info.visible = false;
		
		}
		
		//כפתור אייקון דלקת גרון//
		self.throat_icon.addEventListener("click", throatIcon_btn);
		
		//לחיצה על אייקון דלקת גרון//
		function throatIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(7);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.throat_small_info.visible = false;
		
		}
		//כפתור טקסט דלקת גרון//
		self.throat_txt.addEventListener("click", throatTxt_btn);
		
		//לחיצה על טקסט דלקת גרון//
		function throatTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(7);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.throat_small_info.visible = false;
		
		}
		
		//כפתור אייקון נפיחות בטנית//
		self.stomach_icon.addEventListener("click", stomachIcon_btn);
		
		//לחיצה על אייקון נפיחות בטנית//
		function stomachIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(5);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.stomach_small_info.visible = false;
		}
		//כפתור טקסט נפיחות בטנית//
		self.stomach_txt.addEventListener("click", stomachTxt_btn);
		
		//לחיצה על טקסט נפיחות בטנית//
		function stomachTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(5);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.stomach_small_info.visible = false;
		}
		
		//כפתור אייקון חרדה//
		self.stress_icon.addEventListener("click", stressIcon_btn);
		
		//לחיצה על אייקון חרדה//
		function stressIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(8);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.stress_small_info.visible = false;
		}
		//כפתור טקסט חרדה//
		self.strees_txt.addEventListener("click", streesTxt_btn);
		
		//לחיצה על טקסט חרדה//
		function streesTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(8);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.stress_small_info.visible = false;
		}
		
		//כפתור אייקון דלקת עיניים//
		self.eye_icon.addEventListener("click", eyeIcon_btn);
		
		//לחיצה על אייקון דלקת עיניים//
		function eyeIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(12);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.eye_small_info.visible = false;
		}
		//כפתור טקסט דלקת עיניים//
		self.eye_txt.addEventListener("click", eyeTxt_btn);
		
		//לחיצה על טקסט דלקת עיניים//
		function eyeTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(12);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.eye_small_info.visible = false;
		}
		
		//כפתור אייקון דלקת חניכיים//
		self.teeth_icon.addEventListener("click", teethIcon_btn);
		
		//לחיצה על אייקון דלקת חניכיים//
		function teethIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(6);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.teeth_small_info.visible = false;
		}
		//כפתור טקסט דלקת חניכיים//
		self.teeth_txt.addEventListener("click", teethTxt_btn);
		
		//לחיצה על טקסט דלקת חניכיים//
		function teethTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(6);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.teeth_small_info.visible = false;
		}
		
		//כפתור אייקון צרבות//
		self.fire_icon.addEventListener("click", fireIcon_btn);
		
		//לחיצה על אייקון צרבות//
		function fireIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(10);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.fire_small_info.visible = false;
		}
		//כפתור טקסט צרבות//
		self.fire_txt.addEventListener("click", fireTxt_btn);
		
		//לחיצה על טקסט צרבות//
		function fireTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(10);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.fire_small_info.visible = false;
		}
		
		//כפתור אייקון נדודי שינה//
		self.sleep_icon.addEventListener("click", sleepIcon_btn);
		
		//לחיצה על אייקון נדודי שינה//
		function sleepIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(13);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.sleep_small_info.visible = false;
		}
		//כפתור טקסט נדודי שינה//
		self.sleep_txt.addEventListener("click", sleepTxt_btn);
		
		//לחיצה על טקסט נדודי שינה//
		function sleepTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(13);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.sleep_small_info.visible = false;
		}
		
		//כפתור אייקון אקנה//
		self.acne_icon.addEventListener("click", acneIcon_btn);
		
		//לחיצה על אייקון אקנה//
		function acneIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(9);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.acne_small_info.visible = false;
		}
		//כפתור טקסט אקנה//
		self.acne_txt.addEventListener("click", acneTxt_btn);
		
		//לחיצה על טקסט אקנה//
		function acneTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(9);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
			self.acne_small_info.visible = false;
		}
		
		//כפתור אייקון גרניום לימוני//
		self.garenium_icon.addEventListener("click", gareniumIcon_btn);
		
		//לחיצה על אייקון גרניום לימוני//
		function gareniumIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(1);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		}
		//כפתור טקסט גרניום לימוני//
		self.garenium_txt.addEventListener("click", gareniumTxt_btn);
		
		//לחיצה על טקסט גרניום לימוני//
		function gareniumTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(1);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		}
		
		//כפתור אייקון מרווה//
		self.sage_icon.addEventListener("click", sageIcon_btn);
		
		//לחיצה על אייקון מרווה//
		function sageIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(0);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		}
		//כפתור טקסט מרווה//
		self.sage_txt.addEventListener("click", sageTxt_btn);
		
		//לחיצה על טקסט מרווה//
		function sageTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(0);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		}
		
		//כפתור אייקון נענע//
		self.mint_icon.addEventListener("click", mintIcon_btn);
		
		//לחיצה על אייקון נענע//
		function mintIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(2);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		}
		//כפתור טקטס נענע//
		self.mint_txt.addEventListener("click", mintTxt_btn);
		
		//לחיצהה על טקסט נענע//
		function mintTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(2);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		}
		
		//כפתור אייקון לואיזה//
		self.louise_icon.addEventListener("click", louiseIcon_btn);
		
		//לחיצה על אייקון לואיזה//
		function louiseIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(3);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		}
		//כפתור טקטס לואיזה//
		self.luoisa_txt.addEventListener("click", louiseTxt_btn);
		
		//לחיצה על טקסט לואיזה//
		function louiseTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(3);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		}
		
		//כפתור אייקון מליסה//
		self.mellissa_icon.addEventListener("click", mellissaIcon_btn);
		
		//לחיצה על אייקון מליסה//
		function mellissaIcon_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(4);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		}
		//כפתור טקסט מליסה//
		self.mellissa_txt.addEventListener("click", mellissaTxt_btn);
		
		//לחיצה על טקסט מליסה//
		function mellissaTxt_btn() {
			self.big_info.visible = true;
			self.big_info.gotoAndStop(4);
			removeMouseenable();
			fadeAll();
			fadeBiginfo();
		}
		
		//פילטר השקיעה מועטה//
		function muataFilter() {
			self.check_1.visible = true;
			hideAll();
			self.garenium_icon.visible = true;
			self.garenium_txt.visible = true;
			self.acne_icon.visible = true;
			self.acne_txt.visible = true;
			self.fire_icon.visible = true;
			self.fire_txt.visible = true;
			self.eye_icon.visible = true;
			self.eye_txt.visible = true;
			self.green_filter_bg.water_med.mouseEnabled = false;
			self.green_filter_bg.water_high.mouseEnabled = false;
			self.orange_filter_bg.light_less.mouseEnabled = false;
			self.orange_filter_bg.light_med.mouseEnabled = false;
			self.orange_filter_bg.light_high.mouseEnabled = false;
		
		}
		
		function check_1Filter() {
			showAll();
			self.check_1.visible = false;
			self.green_filter_bg.water_med.mouseEnabled = true;
			self.green_filter_bg.water_high.mouseEnabled = true;
			self.orange_filter_bg.light_less.mouseEnabled = true;
			self.orange_filter_bg.light_med.mouseEnabled = true;
			self.orange_filter_bg.light_high.mouseEnabled = true;
		}
		
			function watermedFilter() {
				self.check_2.visible = true;
				hideAll();
				self.mellissa_icon.visible = true;
				self.sage_icon.visible = true;
				self.mellissa_txt.visible = true;
				self.sage_txt.visible = true;
				self.eye_icon.visible = true;
				self.eye_txt.visible = true;
				self.fire_icon.visible = true;
				self.fire_txt.visible = true;
				self.stomach_icon.visible = true;
				self.stomach_txt.visible = true;
				self.teeth_icon.visible = true;
				self.teeth_txt.visible = true;
				self.sleep_icon.visible = true;
				self.sleep_txt.visible = true;
				self.stress_icon.visible = true;
				self.strees_txt.visible = true;
				self.green_filter_bg.muata.mouseEnabled = false;
				self.green_filter_bg.water_high.mouseEnabled = false;
				self.orange_filter_bg.light_less.mouseEnabled = false;
				self.orange_filter_bg.light_med.mouseEnabled = false;
				self.orange_filter_bg.light_high.mouseEnabled = false;
		
			}
		
			function check_2Filter() {
				showAll();
				self.check_2.visible = false;
				self.green_filter_bg.muata.mouseEnabled = true;
				self.green_filter_bg.water_high.mouseEnabled = true;
				self.orange_filter_bg.light_less.mouseEnabled = true;
				self.orange_filter_bg.light_med.mouseEnabled = true;
				self.orange_filter_bg.light_high.mouseEnabled = true;
			}
		
			function waterhighFilter() {
				self.check_3.visible = true;
				hideAll();
				self.mint_icon.visible = true;
				self.mint_txt.visible = true;
				self.louise_icon.visible = true;
				self.luoisa_txt.visible = true;
				self.head_icon.visible = true;
				self.haed_txt.visible = true;
				self.stomach_icon.visible = true;
				self.stress_icon.visible = true;
				self.stomach_txt.visible = true;
				self.strees_txt.visible = true;
				self.fire_icon.visible = true;
				self.fire_txt.visible = true;
				self.throat_icon.visible = true;
				self.throat_txt.visible = true;
				self.green_filter_bg.muata.mouseEnabled = false;
				self.green_filter_bg.water_med.mouseEnabled = false;
				self.orange_filter_bg.light_less.mouseEnabled = false;
				self.orange_filter_bg.light_med.mouseEnabled = false;
				self.orange_filter_bg.light_high.mouseEnabled = false;
			}
		
			function check_3Filter() {
				showAll();
				self.check_3.visible = false;
				self.green_filter_bg.muata.mouseEnabled = true;
				self.green_filter_bg.water_med.mouseEnabled = true;
				self.orange_filter_bg.light_less.mouseEnabled = true;
				self.orange_filter_bg.light_med.mouseEnabled = true;
				self.orange_filter_bg.light_high.mouseEnabled = true;
			}
			
		//פילטר תאורה נמוכה//
		
			function lightlessFilter() {
				self.check_4.visible = true;
				hideAll();
				self.not_found.visible = true;
				self.green_filter_bg.muata.mouseEnabled = false;
				self.green_filter_bg.water_med.mouseEnabled = false;
				self.green_filter_bg.water_high.mouseEnabled = false;
				self.orange_filter_bg.light_med.mouseEnabled = false;
				self.orange_filter_bg.light_high.mouseEnabled = false;
			}
		
			function check_4Filter() {
				showAll();
				self.check_4.visible = false;
				self.not_found.visible = false;
				self.green_filter_bg.muata.mouseEnabled = true;
				self.green_filter_bg.water_med.mouseEnabled = true;
				self.green_filter_bg.water_high.mouseEnabled = true;
				self.orange_filter_bg.light_med.mouseEnabled = true;
				self.orange_filter_bg.light_high.mouseEnabled = true;
			}
		
			function lightmedFilter() {
				self.check_5.visible = true;
				hideAll();
				self.garenium_icon.visible = true;
				self.garenium_txt.visible = true;
				self.acne_icon.visible = true;
				self.acne_txt.visible = true;
				self.fire_icon.visible = true;
				self.fire_txt.visible = true;
				self.eye_icon.visible = true;
				self.eye_txt.visible = true;
				self.mellissa_icon.visible = true;
				self.sage_icon.visible = true;
				self.mellissa_txt.visible = true;
				self.sage_txt.visible = true;
				self.stomach_icon.visible = true;
				self.stomach_txt.visible = true;
				self.teeth_icon.visible = true;
				self.teeth_txt.visible = true;
				self.sleep_icon.visible = true;
				self.sleep_txt.visible = true;
				self.stress_icon.visible = true;
				self.strees_txt.visible = true;
				self.green_filter_bg.muata.mouseEnabled = false;
				self.green_filter_bg.water_med.mouseEnabled = false;
				self.green_filter_bg.water_high.mouseEnabled = false;
				self.orange_filter_bg.light_less.mouseEnabled = false;
				self.orange_filter_bg.light_high.mouseEnabled = false;
			}
		
			function check_5Filter() {
				showAll();
				self.check_5.visible = false;
				self.green_filter_bg.muata.mouseEnabled = true;
				self.green_filter_bg.water_med.mouseEnabled = true;
				self.green_filter_bg.water_high.mouseEnabled = true;
				self.orange_filter_bg.light_less.mouseEnabled = true;
				self.orange_filter_bg.light_high.mouseEnabled = true;
			}
		
			function lighthighdFilter() {
				self.check_6.visible = true;
				hideAll();
				self.mint_icon.visible = true;
				self.mint_txt.visible = true;
				self.louise_icon.visible = true;
				self.luoisa_txt.visible = true;
				self.mellissa_icon.visible = true;
				self.mellissa_txt.visible = true;
				self.head_icon.visible = true;
				self.haed_txt.visible = true;
				self.stomach_icon.visible = true;
				self.stress_icon.visible = true;
				self.stomach_txt.visible = true;
				self.strees_txt.visible = true;
				self.fire_icon.visible = true;
				self.fire_txt.visible = true;
				self.throat_icon.visible = true;
				self.throat_txt.visible = true;
				self.teeth_icon.visible = true;
				self.teeth_txt.visible = true;
				self.eye_icon.visible = true;
				self.eye_txt.visible = true;
				self.green_filter_bg.muata.mouseEnabled = false;
				self.green_filter_bg.water_med.mouseEnabled = false;
				self.green_filter_bg.water_high.mouseEnabled = false;
				self.orange_filter_bg.light_less.mouseEnabled = false;
				self.orange_filter_bg.light_med.mouseEnabled = false;
			}
		
			function check_6Filter() {
				showAll();
				self.check_6.visible = false;
				self.green_filter_bg.muata.mouseEnabled = true;
				self.green_filter_bg.water_med.mouseEnabled = true;
				self.green_filter_bg.water_high.mouseEnabled = true;
				self.orange_filter_bg.light_less.mouseEnabled = true;
				self.orange_filter_bg.light_med.mouseEnabled = true;
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// big_info
	this.big_info = new lib.Big_Info();
	this.big_info.name = "big_info";
	this.big_info.setTransform(646.3,366,1.0634,1.1487,0,0,0,0.1,-26.8);

	this.timeline.addTween(cjs.Tween.get(this.big_info).wait(1));

	// small_info
	this.not_found = new lib.not_found();
	this.not_found.name = "not_found";
	this.not_found.setTransform(546.3,539.95,1,1,0,0,0,127,33);

	this.melissa_small_info = new lib.melissa_small_info();
	this.melissa_small_info.name = "melissa_small_info";
	this.melissa_small_info.setTransform(144.1,253.7);

	this.louise_small_info = new lib.louise_small_info();
	this.louise_small_info.name = "louise_small_info";
	this.louise_small_info.setTransform(253.75,263.65,1,1,0,0,0,0,9.3);

	this.mint_small_info = new lib.mint_small_info();
	this.mint_small_info.name = "mint_small_info";
	this.mint_small_info.setTransform(367.7,263.65,1,1,0,0,0,-4,9.3);

	this.sage_small_info = new lib.sage_small_info();
	this.sage_small_info.name = "sage_small_info";
	this.sage_small_info.setTransform(489.9,263.65,1,1,0,0,0,-3,9.3);

	this.garenium_small_info = new lib.garenium_small_info();
	this.garenium_small_info.name = "garenium_small_info";
	this.garenium_small_info.setTransform(620.9,260.5,1,1,0,0,0,0,8.8);

	this.haed_small_info = new lib.head_small_info();
	this.haed_small_info.name = "haed_small_info";
	this.haed_small_info.setTransform(1112.25,368.05,1,1,0,0,0,-6.2,8.2);

	this.stomach_small_info = new lib.stomach_small_info();
	this.stomach_small_info.name = "stomach_small_info";
	this.stomach_small_info.setTransform(1108.3,604.2);

	this.throat_small_info = new lib.throat_small_info();
	this.throat_small_info.name = "throat_small_info";
	this.throat_small_info.setTransform(1104.3,518.1,1,1,0,0,0,-12.7,2.6);

	this.ear_small_info = new lib.ear_small_info();
	this.ear_small_info.name = "ear_small_info";
	this.ear_small_info.setTransform(1090.3,436.15,1,1,0,0,0,-3.2,0);

	this.teeth_small_info = new lib.teeth_small_info();
	this.teeth_small_info.name = "teeth_small_info";
	this.teeth_small_info.setTransform(580.15,420.1,1,1,0,0,0,0,2.6);

	this.stress_small_info = new lib.stress_small_info();
	this.stress_small_info.name = "stress_small_info";
	this.stress_small_info.setTransform(1100.35,680.2,1,1,0,0,0,-8.2,0);

	this.sleep_small_info = new lib.sleep_small_info();
	this.sleep_small_info.name = "sleep_small_info";
	this.sleep_small_info.setTransform(572.2,574.2);

	this.fire_small_info = new lib.fire_small_info();
	this.fire_small_info.name = "fire_small_info";
	this.fire_small_info.setTransform(536.2,486.15,1,1,0,0,0,-1.7,0);

	this.eye_small_info = new lib.eye_small_info();
	this.eye_small_info.name = "eye_small_info";
	this.eye_small_info.setTransform(544.2,348.05,1,1,0,0,0,0,2.6);

	this.acne_small_info = new lib.acne_small_info();
	this.acne_small_info.name = "acne_small_info";
	this.acne_small_info.setTransform(566.2,674.2,1,1,0,0,0,0,2.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.acne_small_info},{t:this.eye_small_info},{t:this.fire_small_info},{t:this.sleep_small_info},{t:this.stress_small_info},{t:this.teeth_small_info},{t:this.ear_small_info},{t:this.throat_small_info},{t:this.stomach_small_info},{t:this.haed_small_info},{t:this.garenium_small_info},{t:this.sage_small_info},{t:this.mint_small_info},{t:this.louise_small_info},{t:this.melissa_small_info},{t:this.not_found}]}).wait(1));

	// red_dot
	this.acne_dot = new lib.acne_dot();
	this.acne_dot.name = "acne_dot";
	this.acne_dot.setTransform(918.1,342.6,1,1,0,0,0,11.2,9.5);

	this.allbody_dot = new lib.allbody_dot();
	this.allbody_dot.name = "allbody_dot";
	this.allbody_dot.setTransform(896.25,470.2,1,1,0,0,0,80,206.1);

	this.stomach_dot = new lib.stomach_dot();
	this.stomach_dot.name = "stomach_dot";
	this.stomach_dot.setTransform(898.25,510.15,1,1,0,0,0,12,12);

	this.throat_dot = new lib.throat_dot();
	this.throat_dot.name = "throat_dot";
	this.throat_dot.setTransform(912.25,370.15,1,1,0,0,0,12,12);

	this.teeth_dot = new lib.teeth_dot();
	this.teeth_dot.name = "teeth_dot";
	this.teeth_dot.setTransform(918.25,340.1,1,1,0,0,0,12,12);

	this.eye_dot = new lib.eye_dot();
	this.eye_dot.name = "eye_dot";
	this.eye_dot.setTransform(916.25,320.1,1,1,0,0,0,24,12);

	this.fire_dot = new lib.fire_dot();
	this.fire_dot.name = "fire_dot";
	this.fire_dot.setTransform(898.25,472.15,1,1,0,0,0,12,12);

	this.ear_dot = new lib.ear_dot();
	this.ear_dot.name = "ear_dot";
	this.ear_dot.setTransform(916.25,336.1,1,1,0,0,0,38,12);

	this.head_dot = new lib.head_dot();
	this.head_dot.name = "head_dot";
	this.head_dot.setTransform(916.25,302.1,1,1,0,0,0,12,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.head_dot},{t:this.ear_dot},{t:this.fire_dot},{t:this.eye_dot},{t:this.teeth_dot},{t:this.throat_dot},{t:this.stomach_dot},{t:this.allbody_dot},{t:this.acne_dot}]}).wait(1));

	// about_us
	this.about_us_info = new lib.aboutus_info();
	this.about_us_info.name = "about_us_info";
	this.about_us_info.setTransform(643.25,373.1,1.1123,1.1123);

	this.timeline.addTween(cjs.Tween.get(this.about_us_info).wait(1));

	// Layer_1
	this.woman_body = new lib.woman_body();
	this.woman_body.name = "woman_body";
	this.woman_body.setTransform(888.4,558.3,1.044,1.0879,0,0,0,89.1,273.1);

	this.sleep_icon = new lib.sleep_icon();
	this.sleep_icon.name = "sleep_icon";
	this.sleep_icon.setTransform(738.6,534.95,0.1732,0.1408,0,0,0,128.4,122.2);

	this.eye_icon = new lib.eye_icon();
	this.eye_icon.name = "eye_icon";
	this.eye_icon.setTransform(733.6,300,0.2017,0.1846,0,0,0,137.6,87.8);

	this.fire_icon = new lib.fire_icon();
	this.fire_icon.name = "fire_icon";
	this.fire_icon.setTransform(734.95,450,0.3775,0.1854,0,0,0,58.4,107);

	this.stress_icon = new lib.stress_icon();
	this.stress_icon.name = "stress_icon";
	this.stress_icon.setTransform(1048.6,622.4,0.2484,0.2337,0,0,0,87,113.6);

	this.header_txt = new lib.HeaderText();
	this.header_txt.name = "header_txt";
	this.header_txt.setTransform(991.25,130.15);

	this.aboutus_btn = new lib.aboutus_btn();
	this.aboutus_btn.name = "aboutus_btn";
	this.aboutus_btn.setTransform(54,692.8,0.3895,0.3895,0,0,0,8,-0.2);
	new cjs.ButtonHelper(this.aboutus_btn, 0, 1, 1);

	this.check_1 = new lib.check_1();
	this.check_1.name = "check_1";
	this.check_1.setTransform(373.8,384.95,1.1718,1.1166);

	this.check_6 = new lib.check_6();
	this.check_6.name = "check_6";
	this.check_6.setTransform(209.2,561.8,1.0358,1.1635,0,0,0,0.1,0.1);

	this.check_5 = new lib.check_5();
	this.check_5.name = "check_5";
	this.check_5.setTransform(289.25,562.3,1.0628,1.0747,0,0,0,0.1,0.2);

	this.check_4 = new lib.check_4();
	this.check_4.name = "check_4";
	this.check_4.setTransform(362.75,561.65,1.0714,1.0912,0,0,0,0,0.1);

	this.check_2 = new lib.check_2();
	this.check_2.name = "check_2";
	this.check_2.setTransform(290.75,385,1.1629,1.1321,0,0,0,0.1,0.3);

	this.check_3 = new lib.check_3();
	this.check_3.name = "check_3";
	this.check_3.setTransform(203.6,384.85,1.1071,1.1425,0,0,0,0.1,0.2);

	this.mellissa_txt = new lib.mellissa_txt();
	this.mellissa_txt.name = "mellissa_txt";
	this.mellissa_txt.setTransform(78.45,204.85,1,1,0,0,0,26.4,15.1);

	this.luoisa_txt = new lib.luoisa_txt();
	this.luoisa_txt.name = "luoisa_txt";
	this.luoisa_txt.setTransform(220.6,204.85,1,1,0,0,0,26.4,15.1);

	this.mint_txt = new lib.mint_txt();
	this.mint_txt.name = "mint_txt";
	this.mint_txt.setTransform(358.15,205.5,1,1,0,0,0,22.9,15.2);

	this.sage_txt = new lib.sage_txt();
	this.sage_txt.name = "sage_txt";
	this.sage_txt.setTransform(485.5,205.5,1,1,0,0,0,22.9,15.2);

	this.garenium_txt = new lib.garenium_txt();
	this.garenium_txt.name = "garenium_txt";
	this.garenium_txt.setTransform(618,205.5,1,1,0,0,0,54.6,15.2);

	this.stomach_txt = new lib.stomach_txt();
	this.stomach_txt.name = "stomach_txt";
	this.stomach_txt.setTransform(1168.35,545.05,1,1,0,0,0,54.5,15.1);

	this.throat_txt = new lib.throat_txt();
	this.throat_txt.name = "throat_txt";
	this.throat_txt.setTransform(1182.3,463,1,1,0,0,0,38.7,13.2);

	this.ear_txt = new lib.ear_txt();
	this.ear_txt.name = "ear_txt";
	this.ear_txt.setTransform(1170.35,383,1,1,0,0,0,52.2,15.1);

	this.haed_txt = new lib.haed_txt();
	this.haed_txt.name = "haed_txt";
	this.haed_txt.setTransform(1186.3,316.95,1,1,0,0,0,36,29.2);

	this.throat_icon = new lib.throat_icon();
	this.throat_icon.name = "throat_icon";
	this.throat_icon.setTransform(1050.65,458.9,0.1717,0.166,0,0,0,-0.8,-1.2);

	this.stomach_icon = new lib.stomach_icon();
	this.stomach_icon.name = "stomach_icon";
	this.stomach_icon.setTransform(1051,546.95,0.8707,0.9537,0,0,0,774.3,254.3);

	this.head_icon = new lib.Head_icon();
	this.head_icon.name = "head_icon";
	this.head_icon.setTransform(1057.2,300.9,0.2837,0.2326,0,0,0,2.1,-1.3);

	this.ear_icon = new lib.Ear_icon();
	this.ear_icon.name = "ear_icon";
	this.ear_icon.setTransform(1047.15,376.95,0.2004,0.2216,0,0,0,-14,-1.8);

	this.teeth_txt = new lib.teeth_txt();
	this.teeth_txt.name = "teeth_txt";
	this.teeth_txt.setTransform(640.15,371,1,1,0,0,0,52.2,15.1);

	this.strees_txt = new lib.stress_txt();
	this.strees_txt.name = "strees_txt";
	this.strees_txt.setTransform(1190.3,625.05,1,1,0,0,0,23.8,15.1);

	this.sleep_txt = new lib.sleep_txt();
	this.sleep_txt.name = "sleep_txt";
	this.sleep_txt.setTransform(650.2,536.15,1,1,0,0,0,42,15.3);

	this.fire_txt = new lib.fire_txt();
	this.fire_txt.name = "fire_txt";
	this.fire_txt.setTransform(660.25,452.75,1,1,0,0,0,26.2,15.7);

	this.eye_txt = new lib.eye_txt();
	this.eye_txt.name = "eye_txt";
	this.eye_txt.setTransform(644.25,298.95,1,1,0,0,0,48,15.1);

	this.acne_txt = new lib.acne_txt();
	this.acne_txt.name = "acne_txt";
	this.acne_txt.setTransform(666.2,622.95,1,1,0,0,0,22.7,15.3);

	this.teeth_icon = new lib.Teeth_icon();
	this.teeth_icon.name = "teeth_icon";
	this.teeth_icon.setTransform(733.65,370.95,0.1621,0.1292,0,0,0,0,-0.8);

	this.acne_icon = new lib.Acne_icon();
	this.acne_icon.name = "acne_icon";
	this.acne_icon.setTransform(731.8,619,0.1994,0.1782,0,0,0,-1,1.9);

	this.mellissa_icon = new lib.Melissa_icon();
	this.mellissa_icon.name = "mellissa_icon";
	this.mellissa_icon.setTransform(81.5,81.8,0.4879,0.4879,180,0,0,-0.1,0);

	this.sage_icon = new lib.sage_icon();
	this.sage_icon.name = "sage_icon";
	this.sage_icon.setTransform(489.3,103.3,0.4483,0.4483,135,0,0,0,-1);

	this.orange_filter_bg = new lib.orange_filter_bg();
	this.orange_filter_bg.name = "orange_filter_bg";
	this.orange_filter_bg.setTransform(255.75,552.35,0.9881,1.042,0,0,0,0.4,1.3);

	this.green_filter_bg = new lib.green_filter_bg();
	this.green_filter_bg.name = "green_filter_bg";
	this.green_filter_bg.setTransform(264.6,371.35,1.066,1.0914,0,0,0,-6.7,0.8);

	this.louise_icon = new lib.louise_icon();
	this.louise_icon.name = "louise_icon";
	this.louise_icon.setTransform(222,71.65,0.5514,0.5514,180);

	this.mint_icon = new lib.mint_icon();
	this.mint_icon.name = "mint_icon";
	this.mint_icon.setTransform(364.3,78.65,0.4996,0.4996);

	this.garenium_icon = new lib.garenium_icon();
	this.garenium_icon.name = "garenium_icon";
	this.garenium_icon.setTransform(630.5,76.85,0.4439,0.4439,180);

	this.instruction_txt = new cjs.Text("עברו עם העכבר על הצמח או שם הכאב", "normal 400 20px 'Assistant'");
	this.instruction_txt.name = "instruction_txt";
	this.instruction_txt.textAlign = "center";
	this.instruction_txt.lineHeight = 26;
	this.instruction_txt.lineWidth = 289;
	this.instruction_txt.parent = this;
	this.instruction_txt.setTransform(1112.6,163.15);
	if(!lib.properties.webfonts['Assistant']) {
		lib.webFontTxtInst['Assistant'] = lib.webFontTxtInst['Assistant'] || [];
		lib.webFontTxtInst['Assistant'].push(this.instruction_txt);
	}

	this.text = new cjs.Text("סגולות רפואיות", "bold 35px 'Assistant'", "#95B790");
	this.text.textAlign = "center";
	this.text.lineHeight = 48;
	this.text.lineWidth = 218;
	this.text.parent = this;
	this.text.setTransform(897.85,24.2);

	this.text_1 = new cjs.Text("צמחי תבלין בעלי", "bold 35px 'Assistant'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 48;
	this.text_1.lineWidth = 240;
	this.text_1.parent = this;
	this.text_1.setTransform(1137.8296,24.2,1.0585,1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("Ehjwg4UMDHhAAAMAAABwpMjHhAAAg");
	this.shape.setTransform(638.5,357.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCFAF4").s().p("EhjwA4VMAAAhwpMDHhAAAMAAABwpg");
	this.shape_1.setTransform(638.5,357.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text},{t:this.instruction_txt},{t:this.garenium_icon},{t:this.mint_icon},{t:this.louise_icon},{t:this.green_filter_bg},{t:this.orange_filter_bg},{t:this.sage_icon},{t:this.mellissa_icon},{t:this.acne_icon},{t:this.teeth_icon},{t:this.acne_txt},{t:this.eye_txt},{t:this.fire_txt},{t:this.sleep_txt},{t:this.strees_txt},{t:this.teeth_txt},{t:this.ear_icon},{t:this.head_icon},{t:this.stomach_icon},{t:this.throat_icon},{t:this.haed_txt},{t:this.ear_txt},{t:this.throat_txt},{t:this.stomach_txt},{t:this.garenium_txt},{t:this.sage_txt},{t:this.mint_txt},{t:this.luoisa_txt},{t:this.mellissa_txt},{t:this.check_3},{t:this.check_2},{t:this.check_4},{t:this.check_5},{t:this.check_6},{t:this.check_1},{t:this.aboutus_btn},{t:this.header_txt},{t:this.stress_icon},{t:this.fire_icon},{t:this.eye_icon},{t:this.sleep_icon},{t:this.woman_body}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(639,300.2,639,555);
// library properties:
lib.properties = {
	id: '8231651DCA6D4CEA8945E9406B871310',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_98.png?1602429296902", id:"CachedBmp_98"},
		{src:"images/CachedBmp_103.png?1602429296903", id:"CachedBmp_103"},
		{src:"images/CachedBmp_481.png?1602429296903", id:"CachedBmp_481"},
		{src:"images/CachedBmp_479.png?1602429296903", id:"CachedBmp_479"},
		{src:"images/CachedBmp_477.png?1602429296903", id:"CachedBmp_477"},
		{src:"images/CachedBmp_475.png?1602429296903", id:"CachedBmp_475"},
		{src:"images/CachedBmp_473.png?1602429296903", id:"CachedBmp_473"},
		{src:"images/CachedBmp_50.png?1602429296903", id:"CachedBmp_50"},
		{src:"images/hit_logo_new.png?1602429296903", id:"hit_logo_new"},
		{src:"images/Sgulot_Adi_Yuval_Noa_Rotem_atlas_1.png?1602429296710", id:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_1"},
		{src:"images/Sgulot_Adi_Yuval_Noa_Rotem_atlas_2.png?1602429296710", id:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_2"},
		{src:"images/Sgulot_Adi_Yuval_Noa_Rotem_atlas_3.png?1602429296710", id:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_3"},
		{src:"images/Sgulot_Adi_Yuval_Noa_Rotem_atlas_4.png?1602429296711", id:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_4"},
		{src:"images/Sgulot_Adi_Yuval_Noa_Rotem_atlas_5.png?1602429296711", id:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_5"},
		{src:"images/Sgulot_Adi_Yuval_Noa_Rotem_atlas_6.png?1602429296712", id:"Sgulot_Adi_Yuval_Noa_Rotem_atlas_6"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8231651DCA6D4CEA8945E9406B871310'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
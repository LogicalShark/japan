function translateText()
{
	var dict = {
		" " :[' '],
		"A":['\u9FFF'],//卂
		"B":['\u3089'],//ら
		"C":['\u531A','\u4EC1'],//匚 仁
		"D":['\u30F7'],//ヷ
		"E":['\u4E47'],//乇
		"F":['\u30F2'],//ヲ
		"G":['\u0000'],//
		"H":['\u5344','\u3093'],//卄 ん
		"I":['\u4E28','\u30A8'],//丨 エ
		"J":['\u0000'],//
		"K":['\u0000'],//
		"L":['\u3057','\u4E5A'],//し 乚
		"M":['\u0000'],//
		"N":['\u308A'],//り
		"O":['\u30ED','\u306E'],//ロ の
		"P":['\u30E4'],//ヤ
		"Q":['\u30F0'],//ヰ
		"R":['\u5C3A'],//尺
		"S":['\u308D'],//ろ
		"T":['\u3066','\u4E8D','\u30D3','\u30D2','\u3059'],//て 亍 ビ ヒ す
		"U":['\u3072'],//ひ
		"V":['\u0000'],//
		"W":['\u0000'],//
		"X":['\u4E42','\u4E49'],//乂 义
		"Y":['\u0000'],//
		"Z":['\u4E59'],//乙
		"0":['\u0000'],//
		"1":['\u0000'],//
		"2":['\u0000'],//
		"3":['\u30E8'],//ヨ
		"4":['\u4E29'],//丩
		"5":['\u308D'],//ろ
		"6":['\u0000'],//
		"7":['\u0000'],//
		"8":['\u0000'],//
		"9":['\u0000'],//
		"=":['\u30CB'],//ニ
		".":['\u30FB'],//・
		"/":['\u30CE'],//ノ
	};
	var text = (document.getElementById("input").value).split("");
	console.log(text)
	var out = "";
	for(var i = 0; i<text.length; i++)
	{
		var letters = dict[text[i]]
		out=out.concat(letters[Math.floor(Math.random()*letters.length)]);
	}
	(document.getElementById("output")).innerHTML=out;
}
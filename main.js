function translateText()
{
	var dict = {
		" " :["  "],
		"A":['\u9FFF','\u5183'],//卂
		"B":['\u3089','\u4E43'],//ら
		"C":['\u531A','\u4EC1'],//匚 仁
		"D":['\u30F7'],//ヷ
		"E":['\u4E47'],//乇
		"F":['\u30F2'],//ヲ
		"G":['\u5DF3'],//
		"H":['\u5344','\u3093'],//卄 ん
		"I":['\u4E28','\u30A8'],//丨 エ
		"J":['\u309D','\u4E3F'],//
		"K":['\u535E'],//'\u5C74'
		"L":['\u3057','\u4E5A'],//し 乚
		"M":['\u4ECE','\u5345'],//'\u4E1B'
		"N":['\u308A','\u5200'],//'\u30F5'
		"O":['\u30ED'],//'\u306E'
		"P":['\u30E4'],//ヤ
		"Q":['\u30F0'],//ヰ
		"R":['\u5C3A','\u4EBF'],//尺
		"S":['\u308D'],//ろ
		"T":['\u3066','\u4E8D','\u30D3','\u30D2','\u3059'],//て 亍 ビ ヒ す
		"U":['\u3072','\u51F5','\u51F9'],//ひ
		"V":['\u30EC'],//
		"W":['\u5DDE'],//
		"X":['\u4E42','\u4E49'],//乂 义
		"Y":['\u4E2B'],//
		"Z":['\u4E59','\u4E4B'],//乙
		"0":['\u306E'],//
		"1":['\u4E28'],//
		"2":['\u0000'],//
		"3":['\u30E8'],//ヨ
		"4":['\u4E29'],//丩
		"5":['\u308D'],//ろ
		"6":['\u3089'],//
		"7":['\u30F2'],//
		"8":['\u4F1A'],//
		"9":['\u30F8'],//
		"=":['\u30CB'],//ニ
		".":['\u30FB'],//・
		"\'":['\u4E36'],
		"/":['\u30CE'],//ノ
		"?":['\u3094'],
		"\"":['\u30FE'],
		",":['\u4E36'],
		"+":['\u4E9E'],
	};

	var text = (document.getElementById("input").value.toUpperCase()).split("");
	console.log(text)
	var out = "";
	for(var i = 0; i<text.length; i++)
	{
		var letters = dict[text[i]]
		out=out.concat(letters[Math.floor(Math.random()*letters.length)]);
	}
	(document.getElementById("output")).innerHTML=out;
}
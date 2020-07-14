
// 计算金额数字格式化 s要格式化金额 n 返回几位小数 以逗号分隔
export function fmoney(s, n) {
	if (s === 0 || s === '0') {
		return '0'
	}
	if (s === '' || typeof (s) === 'undefined') {
		return ''
	}
	n = n > 0 && n <= 20 ? n : 2
	// eslint-disable-next-line no-useless-escape
	s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
	var l = s.split('.')[0].split('').reverse()
	var r = s.split('.')[1]
	var t = ''
	for (var i = 0; i < l.length; i++) {
		t += l[i] + ((i + 1) % 3 === 0 && (i + 1) !== l.length ? ',' : '')
	}
	return t.split('').reverse().join('') + '.' + r
}

// 金额格式化
export function rmoney(s) {
	// eslint-disable-next-line no-useless-escape
	return parseFloat((s + '').replace(/[^\d\.-]/g, ''))
}

// 金额格式化
export function rmoneyFloat(s, n) {
	// eslint-disable-next-line no-useless-escape
	return parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + ''
}

// 金额转大写
export function money2Chinese(n) {
	if (n === 0 || n === '0') {
		return '零元'
	}
	if (n === '' || typeof (n) === 'undefined') {
		return ''
	}
    if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n)) { return '数据非法' }

    var unit = '仟佰拾亿仟佰拾万仟佰拾圆角分', str = ''
        n += '00'
    var p = n.indexOf('.')
    if (p >= 0) { n = n.substring(0, p) + n.substr(p + 1, 2) }
        unit = unit.substr(unit.length - n.length)
    for (var i = 0; i < n.length; i++) { str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i) }
    return str.replace(/零(仟|佰|拾|角)/g, '零').replace(/(零)+/g, '零').replace(/零(万|亿|圆)/g, '$1').replace(/(亿)万|壹(拾)/g, '$1$2').replace(/^圆零?|零分/g, '').replace(/圆$/g, '圆整')
}

// 浮点数加法运算
export function FloatAdd(arg1, arg2) {
	var r1, r2, m
	try {
		r1 = arg1.toString().split('.')[1].length
	} catch (e) {
		r1 = 0
	}
	try {
		r2 = arg2.toString().split('.')[1].length
	} catch (e) {
		r2 = 0
	}
	m = Math.pow(10, Math.max(r1, r2))
	return (FloatMul(arg1, m) + FloatMul(arg2, m)) / m
}
// 浮点数减法运算
export function FloatSub(arg1, arg2) {
	var r1, r2, m, n
	try {
		r1 = arg1.toString().split('.')[1].length
	} catch (e) {
		r1 = 0
	}
	try {
		r2 = arg2.toString().split('.')[1].length
	} catch (e) {
		r2 = 0
	}
	m = Math.pow(10, Math.max(r1, r2))
	// 动态控制精度长度
	n = (r1 >= r2) ? r1 : r2
	return ((FloatMul(arg1, m) - FloatMul(arg2, m)) / m).toFixed(n)
}
// 浮点数乘法运算
export function FloatMul(arg1, arg2) {
	var m = 0, s1 = '', s2 = ''
	if (arg1 !== 'undefined' && arg1 != null) {
		s1 = arg1.toString()
	}
	if (arg2 !== 'undefined' && arg2 != null) {
		s2 = arg2.toString()
	}

	try {
		m += s1.split('.')[1].length
	} catch (e) {

	}
	try {
		m += s2.split('.')[1].length
	} catch (e) {
	}
	var a = Number(s1.replace('.', ''))
	var b = Number(s2.replace('.', ''))
	return a * b / Math.pow(10, m)
}
// 浮点数除法运算
export function FloatDiv(arg1, arg2) {
	var t1 = 0, t2 = 0, r1, r2
	try {
		t1 = arg1.toString().split('.')[1].length
	} catch (e) {
	}
	try {
		t2 = arg2.toString().split('.')[1].length
	} catch (e) {
	}
	r1 = Number(arg1.toString().replace('.', ''))
	r2 = Number(arg2.toString().replace('.', ''))
	return (r1 / r2) * Math.pow(10, t2 - t1)
}

export function encodeHTML(source) {
	return String(source).replace(/\+/g, ';2B;')
}

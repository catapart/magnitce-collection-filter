// collection-filter.css?raw
var collection_filter_default = 'svg\r\n{\r\n    width: 12px;\r\n    height: 12px;\r\n}\r\n\r\nbutton\r\n{\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: var(--button-padding, 2px 5px);\r\n}\r\n\r\nsearch, form, [part="query"]\r\n{\r\n    display: flex;\r\n    min-width:0;\r\n    flex: 1;\r\n}\r\n\r\n[part="query"] input\r\n{\r\n    flex: 1;\r\n    min-width: 0;\r\n}\r\n\r\n\r\nbutton\r\n{\r\n    border: solid 1px transparent;\r\n}\r\n:host([regex]) [part="regex-button"]\r\n{\r\n    border-color: highlight;\r\n}\r\n\r\n[part="filter-button"]\r\n{\r\n    display: none;\r\n    /* functionality has not been implemented */\r\n}\r\n';

// collection-filter.html?raw
var collection_filter_default2 = '<search part="search">\r\n    <form part="form">\r\n        <span part="query">\r\n            <!-- <button type="button" part="filter-button" title="Filters" popovertarget="filter-list-container">\r\n                <slot name="filter-icon">\r\n                    <svg part="filter-icon"  class="icon filter" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r\n                    <path\r\n                        style="fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"\r\n                        d="m 1.8697249,0.49986407 c -0.3237,0 -0.4665,0.34257 -0.25647,0.57509003 l 6.71347,7.43236 0.41559,13.3278599 c 0.008,0.25922 -0.0185,0.53883 0.14083,0.46848 l 4.6352201,-2.04568 c 0.15939,-0.0703 0.29609,-0.20929 0.30565,-0.46847 l 0.41593,-11.2821899 7.02268,-7.42331 c 0.16433,-0.27887003 -0.26045,-0.58414003 -0.58412,-0.58414003 z" />\r\n                    </svg>\r\n                </slot>\r\n            </button> -->\r\n            <input type="search" part="input" />\r\n            <button type="button" part="regex-button" title="Regex?">\r\n                <slot name="regex-icon">\r\n                    <svg part="regex-icon" class="icon regex" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r\n                        <path\r\n                            style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:0.799997;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1;paint-order:fill markers stroke"\r\n                            d="m 13.39781,0.28938961 c -0.224939,0.0457322 -0.420792,0.21339591 -0.508262,0.34752541 -0.08747,0.1341295 -0.111102,0.2373859 -0.126685,0.3185644 -0.03118,0.16236468 -0.02196,0.26434118 -0.01375,0.37344288 0.01649,0.2182033 0.059,0.4438907 0.116002,0.7087705 0.114041,0.5297673 0.291114,1.1921891 0.468579,1.8565308 0.06283,0.2351616 0.103522,0.4158349 0.163312,0.6432315 0.01938,0.1321316 0.03993,0.2540164 0.05955,0.3810597 C 13.443987,4.8517115 13.336761,4.7859384 13.219236,4.7173167 13.03212,4.5780833 12.881108,4.4734066 12.688084,4.3286323 12.137552,3.9157161 11.588154,3.5045247 11.138869,3.2006945 10.914235,3.0487795 10.721766,2.9241398 10.525296,2.8272516 10.427057,2.778788 10.335156,2.7326266 10.172719,2.7007389 10.091501,2.6848185 9.988104,2.6684299 9.8308249,2.6991781 9.6735379,2.7300044 9.4446367,2.8494153 9.3179834,3.0406085 9.1913224,3.2318018 9.1703867,3.4875975 9.2035055,3.6442107 c 0.033135,0.1566131 0.089385,0.2455801 0.1358434,0.3139911 0.092925,0.1368219 0.1718224,0.2030321 0.2548929,0.2743618 0.1661411,0.142675 0.3551794,0.2721376 0.5830492,0.4191673 0.455755,0.2940671 1.05101,0.6386894 1.646899,0.98314 0.211724,0.1223843 0.369894,0.2209114 0.57389,0.3399087 0.106397,0.079048 0.205347,0.1517355 0.308314,0.2271078 -0.124066,0.031529 -0.243772,0.060872 -0.372418,0.0945 -0.233215,0.034026 -0.41626,0.066335 -0.657844,0.1006029 C 10.994485,6.4937694 10.313275,6.5902752 9.7804511,6.6926965 9.5140393,6.7438915 9.2904522,6.7931824 9.0829243,6.8634117 8.9791682,6.8985303 8.8815232,6.9297468 8.7440856,7.0219291 8.6753941,7.0679734 8.589268,7.1298991 8.4998754,7.2627643 8.4104827,7.3956217 8.3334764,7.6417326 8.3792941,7.8663587 8.4250884,8.0909926 8.59298,8.2865795 8.7272995,8.3739311 c 0.1343117,0.087359 0.2361767,0.1094294 0.3174733,0.1249908 0.1625776,0.031139 0.2646926,0.02349 0.3739425,0.015218 0.2184997,-0.016467 0.4444938,-0.058921 0.7097337,-0.1158444 0.530487,-0.1138855 1.195333,-0.2907192 1.860577,-0.467943 0.238325,-0.063526 0.421479,-0.1057849 0.65174,-0.166142 0.12949,-0.018964 0.249376,-0.037226 0.373943,-0.056424 -0.06541,0.1098664 -0.129764,0.2146134 -0.196892,0.3292325 -0.1409,0.188891 -0.247133,0.3415397 -0.393792,0.5365335 -0.413478,0.5497849 -0.826752,1.0984382 -1.130994,1.5471135 -0.152122,0.224329 -0.275407,0.418067 -0.372419,0.614262 -0.04853,0.09811 -0.09476,0.18989 -0.126685,0.352107 -0.01594,0.08111 -0.03392,0.184357 -0.0031,0.34143 0.03087,0.157074 0.150442,0.385657 0.341895,0.512146 0.191453,0.126481 0.44912,0.147396 0.605946,0.114315 0.156826,-0.03309 0.245921,-0.09079 0.314425,-0.137181 0.137,-0.0928 0.2033,-0.170068 0.274735,-0.253026 0.142865,-0.165915 0.272503,-0.356219 0.419741,-0.583787 0.294466,-0.455129 0.638025,-1.048055 0.982944,-1.6431273 0.12255,-0.2114372 0.221211,-0.3693927 0.34037,-0.5731193 0.07941,-0.1065887 0.151715,-0.2062708 0.227417,-0.3094179 0.03141,0.1233832 0.05955,0.2424585 0.0931,0.3703915 0.03423,0.2339442 0.06775,0.4175597 0.102263,0.6599947 0.09691,0.6807303 0.193547,1.3594863 0.296108,1.8915873 0.05127,0.26605 0.100622,0.490856 0.170947,0.698102 0.03517,0.103623 0.06799,0.201128 0.160265,0.338379 0.04611,0.0686 0.106585,0.153086 0.23963,0.242357 0.133038,0.08927 0.379483,0.167695 0.604415,0.12194 0.224939,-0.04573 0.420791,-0.213396 0.508269,-0.347526 0.08747,-0.134137 0.111095,-0.237386 0.126677,-0.318572 0.03118,-0.162357 0.02196,-0.264333 0.01375,-0.373435 -0.01649,-0.218203 -0.059,-0.443891 -0.115994,-0.708778 -0.114048,-0.52976 -0.291122,-1.1921823 -0.468579,-1.8565236 -0.06283,-0.2351616 -0.103529,-0.4158349 -0.16332,-0.6432315 -0.01938,-0.1321316 -0.03993,-0.2540242 -0.05955,-0.3810597 0.112571,0.066803 0.219789,0.1325764 0.337315,0.2011981 0.187124,0.1392334 0.338135,0.2439023 0.531159,0.3886844 0.550524,0.4129162 1.099923,0.824108 1.549207,1.127938 0.224642,0.1519153 0.417111,0.2765553 0.613581,0.3734433 0.09823,0.04846 0.19014,0.09462 0.352577,0.126505 0.08122,0.01592 0.184607,0.03231 0.341894,0.0016 0.157287,-0.03083 0.386189,-0.150237 0.512842,-0.34143 0.126653,-0.1911933 0.147597,-0.4469893 0.11447,-0.6036023 C 20.126173,9.3665769 20.06993,9.2776018 20.023464,9.2091986 19.930547,9.0723767 19.851641,9.0061665 19.768571,8.934829 19.60243,8.7921619 19.413391,8.6626992 19.185522,8.5156618 18.729775,8.2215946 18.134511,7.8769801 17.538631,7.5325295 17.326906,7.4101452 17.168736,7.3116181 16.964733,7.1926209 c -0.10639,-0.079048 -0.20534,-0.1517434 -0.308315,-0.2271078 0.124075,-0.031529 0.243773,-0.060872 0.372419,-0.094508 0.233215,-0.034026 0.416259,-0.066257 0.657844,-0.1005951 0.681655,-0.096779 1.362857,-0.1932848 1.89568,-0.2957061 0.266412,-0.051195 0.489999,-0.1004859 0.697527,-0.1707152 0.103764,-0.035119 0.201409,-0.066335 0.338839,-0.1585174 0.06869,-0.046122 0.154817,-0.10797 0.24421,-0.2408352 0.08939,-0.1328574 0.166399,-0.3789683 0.120581,-0.6036022 -0.04579,-0.224626 -0.213686,-0.420213 -0.347997,-0.5075724 -0.134312,-0.087352 -0.236185,-0.1094216 -0.317473,-0.124983 -0.162586,-0.031138 -0.264701,-0.02349 -0.373951,-0.015218 -0.2185,0.016467 -0.444494,0.058921 -0.709733,0.1158366 -0.530487,0.1138933 -1.195333,0.290727 -1.860577,0.467943 -0.238318,0.063526 -0.42148,0.1057927 -0.651741,0.166142 -0.12949,0.018964 -0.249375,0.037226 -0.373942,0.056424 0.06541,-0.1098664 0.129764,-0.2146134 0.196892,-0.3292403 0.140907,-0.188891 0.247141,-0.3415319 0.393792,-0.5365335 0.413477,-0.5497771 0.826751,-1.0984305 1.130994,-1.5471051 0.152121,-0.2243374 0.275407,-0.4180669 0.372426,-0.6142704 0.04853,-0.098098 0.09475,-0.1898821 0.126685,-0.3520987 0.01594,-0.081108 0.03392,-0.1843568 0.0031,-0.3414304 C 18.541151,1.5818539 18.421585,1.3532633 18.230125,1.2267819 18.038672,1.1003005 17.781004,1.080915 17.624178,1.1139889 17.467353,1.1470784 17.378265,1.2032447 17.309761,1.249648 17.172753,1.3424468 17.106453,1.4197155 17.035026,1.5026733 16.892157,1.668589 16.762519,1.8588925 16.615289,2.086453 16.320815,2.5415816 15.977256,3.1345156 15.632338,3.7295878 15.509787,3.9410249 15.411126,4.0989804 15.291975,4.302707 15.212554,4.4092957 15.140252,4.5089778 15.064551,4.6121249 15.033136,4.4887417 15.005003,4.3696664 14.971446,4.2417334 14.937218,4.0077814 14.903692,3.8241738 14.869183,3.5817387 14.772272,2.9010084 14.675635,2.2222525 14.573074,1.6901518 14.52181,1.4241014 14.472452,1.1992958 14.402127,0.99204952 14.366961,0.88842632 14.334139,0.79091382 14.241871,0.65367052 14.195686,0.58507222 14.135278,0.50058482 14.00224,0.41131342 13.869194,0.32204206 13.622757,0.24361842 13.397818,0.289374 Z" />\r\n                        <path\r\n                            style="fill:var(--icon-primary-color,InfoText);stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1"\r\n                            d="m 2.3960485,12.796482 h 8.6904305 c 0.26835,0 0.48438,0.21604 0.48438,0.48438 v 8.67733 c 0,0.26835 -0.21603,0.48439 -0.48438,0.48439 H 2.3960485 c -0.26835,0 -0.48439,-0.21604 -0.48439,-0.48439 v -8.67733 c 0,-0.26834 0.21604,-0.48438 0.48439,-0.48438 z" />\r\n                    </svg>\r\n                </slot>\r\n            </button>\r\n            <button type="submit" part="search-button" title="Search">\r\n                <slot name="search-icon">\r\n                    <svg part="search-icon" class="icon magnifying-glass" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r\n                    <path\r\n                        style="color:#000000;fill:var(--icon-secondary-color,InfoBackground);stroke-width:1.00001;stroke-linecap:round;-inkscape-stroke:none"\r\n                        d="m 13.933452,0.33101262 c 4.665112,0 8.484511,3.81819728 8.484511,8.48276858 0,4.6645798 -3.819397,8.4827768 -8.484511,8.4827768 -1.192569,0 -2.291872,-0.315962 -3.312255,-0.763428 -0.01293,0.01395 -0.01062,0.02239 -0.02429,0.03642 l -0.0035,0.0036 -0.0052,0.0053 -5.0265086,5.023041 c -1.1757993,1.176212 -3.1098412,1.176212 -4.2856361,0 -1.17525285,-1.176408 -1.17551045,-3.11046 0.00178,-4.285633 L 6.2973927,12.297813 C 5.7998422,11.231935 5.4489409,10.075498 5.4489418,8.8137812 5.4489453,4.1492099 9.2683445,0.33101262 13.933452,0.33101262 Z m 0,1.77671558 c -3.698211,0 -6.7077912,3.00885 -6.7077947,6.706053 -9e-7,1.2159838 0.3489754,2.3493058 0.9334695,3.3504318 L 8.6154513,12.945 7.8259926,13.387438 c -0.1727127,0.09663 -0.260868,0.155498 -0.2758768,0.17004 l -0.039905,0.0382 -4.9761929,4.976189 c -0.4938381,0.492967 -0.495224,1.279271 -0.00178,1.773242 0.4934623,0.493643 1.2797717,0.493652 1.7732439,0 l 5.021306,-5.017827 c 0.016968,-0.01741 0.077527,-0.11092 0.1787127,-0.300167 l 0.4250934,-0.794671 0.7877241,0.435508 c 0.968614,0.534854 2.054792,0.851917 3.215091,0.851917 3.698219,0 6.707794,-3.00885 6.707794,-6.7060612 0,-3.6972029 -3.00958,-6.706053 -6.707794,-6.706053 z" />\r\n                    <path\r\n                        style="color:#000000;fill:var(--icon-primary-color,InfoText);stroke:none;stroke-width:0.500001;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\r\n                        d="m 13.933412,1.441451 c 4.060915,0 7.374068,3.3121531 7.374068,7.3722324 0,4.0600786 -3.31315,7.3722326 -7.374068,7.3722326 -1.357274,0 -2.63002,-0.371201 -3.724448,-1.015473 a 1.9197456,1.9197456 0 0 1 -0.4067369,0.623423 l -5.0263745,5.023156 a 1.9197456,1.9197456 0 0 1 -2.7154086,0 1.9197456,1.9197456 0 0 1 0.00187,-2.715407 L 7.0868452,13.078458 A 1.9197456,1.9197456 0 0 1 7.6684894,12.691916 C 6.966462,11.563897 6.5593712,10.235038 6.5593721,8.8136834 6.5593756,4.7536041 9.8725264,1.441451 13.933439,1.441451 Z m 0,1.9207539 c -3.023755,0 -5.4533082,2.4292498 -5.4533109,5.4514785 -1.8e-6,3.0222286 2.4295529,5.4514696 5.4533109,5.4514696 3.02376,0 5.45515,-2.429241 5.455149,-5.4514696 -2e-6,-3.0222287 -2.431391,-5.4514785 -5.455149,-5.4514785 z" />\r\n                    <path\r\n                        style="color:#000000;display:inline;fill:var(--icon-secondary-color,InfoBackground);fill-opacity:1;stroke-width:0.866683;-inkscape-stroke:none"\r\n                        d="M 8.3751718,8.8139322 A 5.5588643,5.557011 0 0 0 13.934035,14.370947 5.5588643,5.557011 0 0 0 19.4929,8.8139322 5.5588643,5.557011 0 0 0 13.934035,3.2569256 5.5588643,5.557011 0 0 0 8.3751718,8.8139322 Z" />\r\n                    </svg>\r\n                </slot>\r\n            </button>\r\n        </span>\r\n        <!-- <div part="filter-list-container" id="filter-list-container" popover>\r\n            <header>\r\n                <span part="filter-list-title">Filters</span>\r\n                <button type="button" part="close-filter-list-button" popovertarget="filter-list-container">\r\n                    <slot name="close-icon">\r\n                        <svg part="close-icon"  class="icon close-cross" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r\n                            <path\r\n                                style="color:#000000;display:inline;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-dasharray:none;stroke-opacity:1"\r\n                                d="m 3.8656768,2.2287478 a 1.6392814,1.6392814 0 0 0 -1.15929,0.48032 1.6392814,1.6392814 0 0 0 0,2.31816 l 6.38181,6.3818002 -6.38181,6.38182 a 1.6392814,1.6392814 0 0 0 0,2.31814 1.6392814,1.6392814 0 0 0 2.31816,0 l 6.3818102,-6.3818 6.38181,6.3818 a 1.6392814,1.6392814 0 0 0 2.31816,0 1.6392814,1.6392814 0 0 0 0,-2.31814 l -6.38182,-6.38182 6.38182,-6.3818002 a 1.6392814,1.6392814 0 0 0 0,-2.31816 1.6392814,1.6392814 0 0 0 -1.15929,-0.48032 1.6392814,1.6392814 0 0 0 -1.15887,0.48032 l -6.38181,6.38181 -6.3818102,-6.38181 a 1.6392814,1.6392814 0 0 0 -1.15887,-0.48032 z" />\r\n                        </svg>\r\n                    </slot>\r\n                </button>\r\n            </header>\r\n            <ul class="filters" part="filter-list"></ul>\r\n            <button type="button" part="new-filter">\r\n                <svg part="new-filter-icon" class="icon plus" viewBox="0 0 22.812714 22.814663" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">\r\n                    <path\r\n                        style="color:#000000;fill:var(--icon-primary-color,InfoText);fill-opacity:1;stroke:var(--icon-secondary-color,InfoBackground);stroke-width:1;stroke-linecap:round;stroke-opacity:1;-inkscape-stroke:none"\r\n                        d="M 11.406117,0.76837147 A 1.6733008,1.6733014 0 0 0 9.7322668,2.4422315 v 7.29197 h -7.29198 a 1.6733008,1.6733014 0 0 0 -1.67190999,1.6738595 1.6733008,1.6733014 0 0 0 1.67190999,1.67239 h 7.29198 v 7.29343 a 1.6733008,1.6733014 0 0 0 1.6738502,1.67241 1.6733008,1.6733014 0 0 0 1.67433,-1.67241 v -7.29343 h 7.29149 a 1.6733008,1.6733014 0 0 0 1.6724,-1.67239 1.6733008,1.6733014 0 0 0 -1.6724,-1.6738595 h -7.29149 v -7.29197 a 1.6733008,1.6733014 0 0 0 -1.67433,-1.67386003 z" />\r\n                </svg>\r\n                <span part="new-filter-label">New Filter...</span>\r\n            </button>\r\n        </div> -->\r\n    </form>\r\n</search>';

// item-filter.filters.ts
var QueryMatch = class {
  constructor(value, start, end) {
    this.value = value;
    this.start = start;
    this.end = end;
  }
};
var ItemFilterMatch = class {
  constructor(item, queryMatches, filter, propertyName) {
    this.item = item;
    this.queryMatches = queryMatches;
    this.filter = filter;
    this.propertyName = propertyName;
  }
};
var ItemFilter = class {
  constructor(value, type = "textQuery", compare) {
    this.value = value;
    this.type = type;
    this.compare = compare;
  }
};
var ItemFilters = class {
  filters = [];
  query = "";
  utilities;
  constructor() {
    this.utilities = {
      matchTextQuery: this.matchTextQuery,
      matchRegexQuery: this.matchRegexQuery
    };
  }
  setQuery(query, comparison, mode = null) {
    const existingQueryFilterIndex = this.filters.findIndex((item) => item.type == "textQuery" || item.type == "regexQuery");
    if (existingQueryFilterIndex != -1) {
      this.removeFilter(existingQueryFilterIndex);
    }
    if (query == "") {
      return;
    }
    const filterType = mode == "regex" ? "regexQuery" : "textQuery";
    this.addFilter(query, filterType, comparison);
  }
  addFilter(value, type, comparison) {
    const filter = new ItemFilter(value, type, comparison);
    this.filters.push(filter);
    return filter;
  }
  addFilters(...filters) {
    this.filters.concat(filters);
  }
  removeFilter(index) {
    this.filters.splice(index, 1);
  }
  filterItems(items, context) {
    const matching = [];
    let failedComparison = false;
    for (let i = 0; i < items.length; i++) {
      failedComparison = false;
      let matchResult = null;
      for (let j = 0; j < this.filters.length; j++) {
        const currentMatchResult = this.filters[j].compare.call(context ?? this, this.filters[j], items[i], this.utilities);
        if (currentMatchResult != false) {
          matchResult = currentMatchResult;
        } else {
          failedComparison = true;
        }
        if (failedComparison == true) {
          break;
        }
      }
      if (failedComparison == false && matchResult != null) {
        matching.push(matchResult);
      }
    }
    return matching;
  }
  matchTextQuery(query, propertyValue) {
    const results = [];
    const matchIndex = propertyValue.toLowerCase().indexOf(query.toLowerCase());
    if (matchIndex == -1) {
      return results;
    }
    const result = new QueryMatch(query, matchIndex, matchIndex + query.length);
    results.push(result);
    return results;
  }
  matchRegexQuery(query, propertyValue) {
    const matches = Array.from(propertyValue.matchAll(new RegExp(query, "gi")));
    const results = [];
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      const value = match[0];
      const result = new QueryMatch(value, match.index, match.index + value.length);
      results.push(result);
    }
    return results;
  }
};

// collection-filter.ts
var COMPONENT_STYLESHEET = new CSSStyleSheet();
COMPONENT_STYLESHEET.replaceSync(collection_filter_default);
var COMPONENT_TAG_NAME = "collection-filter";
var CollectionFilterElement = class extends HTMLElement {
  // #boundEventHandlers: Map<string, (event?:Event) => void> = new Map([
  // ]);
  componentParts = /* @__PURE__ */ new Map();
  getPart(key) {
    if (this.componentParts.get(key) == null) {
      const part = this.shadowRoot.querySelector(`[part="${key}"]`);
      if (part != null) {
        this.componentParts.set(key, part);
      }
    }
    return this.componentParts.get(key);
  }
  findPart(key) {
    return this.shadowRoot.querySelector(`[part="${key}"]`);
  }
  itemFilters = new ItemFilters();
  get filterPropertyAttribute() {
    return this.getAttribute("filter-property") ?? "data-filter-property";
  }
  constructor() {
    super();
    const parentForm = this.closest("form");
    if (parentForm != null) {
      throw new Error("The <collection-filter> element cannot be placed inside of a <form> element.");
    }
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = collection_filter_default2;
    this.shadowRoot.adoptedStyleSheets.push(COMPONENT_STYLESHEET);
    this.findPart("form").addEventListener("submit", (event) => {
      const mode = this.hasAttribute("regex") ? "regex" : null;
      const queryComparison = mode == "regex" ? this.regexQueryComparison : this.textQueryComparison;
      this.itemFilters.setQuery(this.findPart("input").value, queryComparison, mode);
      this.dispatchEvent(new CustomEvent("change", { detail: { filters: this.itemFilters.filters } }));
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    this.findPart("regex-button").addEventListener("click", () => {
      if (this.hasAttribute("regex")) {
        this.removeAttribute("regex");
      } else {
        this.toggleAttribute("regex", true);
      }
    });
    this.findPart("input").addEventListener("input", (event) => {
      if (event.currentTarget.value == "") {
        this.itemFilters.setQuery("", () => {
          return false;
        });
        this.dispatchEvent(new CustomEvent("change", { detail: { filters: this.itemFilters.filters } }));
      }
    });
  }
  static observedAttributes = ["placeholder"];
  attributeChangedCallback(attributeName, _oldValue, newValue) {
    if (attributeName == "placeholder") {
      this.findPart("input").placeholder = newValue;
    }
  }
  filterElements(items) {
    return this.itemFilters.filterItems(items, this);
  }
  textQueryComparison(filter, item, utilities) {
    const propertyValue = item.getAttribute(this.filterPropertyAttribute);
    const queryValue = propertyValue ?? item.textContent ?? "";
    const results = utilities.matchTextQuery(filter.value, queryValue);
    if (results.length == 0) {
      return false;
    }
    return new ItemFilterMatch(item, results, filter, propertyValue == null ? "[ Text Content ]" : this.filterPropertyAttribute);
  }
  regexQueryComparison(filter, item, utilities) {
    const propertyValue = item.getAttribute(this.filterPropertyAttribute);
    const queryValue = propertyValue ?? item.textContent ?? "";
    const results = utilities.matchRegexQuery(filter.value, queryValue);
    if (results.length == 0) {
      return false;
    }
    return new ItemFilterMatch(item, results, filter, propertyValue == null ? "[ Text Content ]" : this.filterPropertyAttribute);
  }
  // addFilters(...filters: ItemFilter[])
  // {
  //     this.#itemFilters.addFilters(...filters);
  // }
  // addTextFilter(query: string)
  // {
  //     this.#itemFilters.addTextFilter(query);
  //     this.dispatchEvent(new CustomEvent('change', { detail: { filters: this.#itemFilters.filters } }));
  // }
  // addTagFilter()
  // {
  // }
  // removeFilter(index: number)
  // {
  //     this.itemFilters.removeFilter(index);
  // }
};
if (customElements.get(COMPONENT_TAG_NAME) == null) {
  customElements.define(COMPONENT_TAG_NAME, CollectionFilterElement);
}
export {
  CollectionFilterElement
};
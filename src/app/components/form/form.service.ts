import { Injectable} from '@angular/core';

const COUNTRY_DIAL_CODE: Object[] = [
  { dial: "93", code: "AF", name:"Afghanistan"},
{ dial: "358", code: "AX", name:"Aland Islands"},
{ dial: "355", code: "AL", name:"Albania"},
{ dial: "213", code: "DZ", name:"Algeria"},
{ dial: "1684", code: "AS", name:"American Samoa"},
{ dial: "376", code: "AD", name:"Andorra"},
{ dial: "244", code: "AO", name:"Angola"},
{ dial: "1264", code: "AI", name:"Anguilla"},
{ dial: "672", code: "AQ", name:"Antarctica"},
{ dial: "1268", code: "AG", name:"Antigua &amp; Barbuda"},
{ dial: "54", code: "AR", name:"Argentina"},
{ dial: "374", code: "AM", name:"Armenia"},
{ dial: "297", code: "AW", name:"Aruba"},
{ dial: "61", code: "AU", name:"Australia"},
{ dial: "43", code: "AT", name:"Austria"},
{ dial: "994", code: "AZ", name:"Azerbaijan"},
{ dial: "242", code: "BS", name:"Bahama"},
{ dial: "973", code: "BH", name:"Bahrain"},
{ dial: "880", code: "BD", name:"Bangladesh"},
{ dial: "1246", code: "BB", name:"Barbados"},
{ dial: "375", code: "BY", name:"Belarus"},
{ dial: "32", code: "BE", name:"Belgium"},
{ dial: "501", code: "BZ", name:"Belize"},
{ dial: "229", code: "BJ", name:"Benin"},
{ dial: "1441", code: "BM", name:"Bermuda"},
{ dial: "975", code: "BT", name:"Bhutan"},
{ dial: "591", code: "BO", name:"Bolivia"},
{ dial: "387", code: "BA", name:"Bosnia and Herzegovina"},
{ dial: "267", code: "BW", name:"Botswana"},
{ dial: "NULL", code: "BV", name:"Bouvet Island"},
{ dial: "55", code: "BR", name:"Brazil"},
{ dial: "246", code: "IO", name:"British Indian Ocean Territory"},
{ dial: "1284", code: "VG", name:"British Virgin Islands"},
{ dial: "673", code: "BN", name:"Brunei Darussalam"},
{ dial: "359", code: "BG", name:"Bulgaria"},
{ dial: "226", code: "BF", name:"Burkina Faso"},
{ dial: "257", code: "BI", name:"Burundi"},
{ dial: "855", code: "KH", name:"Cambodia"},
{ dial: "237", code: "CM", name:"Cameroon"},
{ dial: "1", code: "CA", name:"Canada"},
{ dial: "238", code: "CV", name:"Cape Verde"},
{ dial: "1345", code: "KY", name:"Cayman Islands"},
{ dial: "236", code: "CF", name:"Central African Republic"},
{ dial: "235", code: "TD", name:"Chad"},
{ dial: "56", code: "CL", name:"Chile"},
{ dial: "86", code: "CN", name:"China"},
{ dial: "61", code: "CX", name:"Christmas Island"},
{ dial: "61", code: "CC", name:"Cocos (Keeling) Islands"},
{ dial: "57", code: "CO", name:"Colombia"},
{ dial: "269", code: "KM", name:"Comoros"},
{ dial: "242", code: "CG", name:"Congo"},
{ dial: "243", code: "CD", name:"Congo, Democratic Republic"},
{ dial: "682", code: "CK", name:"Cook Iislands"},
{ dial: "506", code: "CR", name:"Costa Rica"},
{ dial: "225", code: "CI", name:"Côte D'ivoire (Ivory Coast)"},
{ dial: "385", code: "HR", name:"Croatia"},
{ dial: "53", code: "CU", name:"Cuba"},
{ dial: "357", code: "CY", name:"Cyprus"},
{ dial: "420", code: "CZ", name:"Czech Republic"},
{ dial: "45", code: "DK", name:"Denmark"},
{ dial: "253", code: "DJ", name:"Djibouti"},
{ dial: "1767", code: "DM", name:"Dominica"},
{ dial: "1809", code: "DO", name:"Dominican Republic"},
{ dial: "670", code: "TP", name:"East Timor"},
{ dial: "593", code: "EC", name:"Ecuador"},
{ dial: "20", code: "EG", name:"Egypt"},
{ dial: "503", code: "SV", name:"El Salvador"},
{ dial: "240", code: "GQ", name:"Equatorial Guinea"},
{ dial: "291", code: "ER", name:"Eritrea"},
{ dial: "372", code: "EE", name:"Estonia"},
{ dial: "251", code: "ET", name:"Ethiopia"},
{ dial: "389", code: "MK", name:"F.Y.R.O.M. (Macedonia)"},
{ dial: "500", code: "FK", name:"Falkland Islands (Malvinas)"},
{ dial: "298", code: "FO", name:"Faroe Islands"},
{ dial: "679", code: "FJ", name:"Fiji"},
{ dial: "358", code: "FI", name:"Finland"},
{ dial: "33", code: "FR", name:"France"},
{ dial: "", code: "FX", name:"France, Metropolitan"},
{ dial: "594", code: "GF", name:"French Guiana"},
{ dial: "689", code: "PF", name:"French Polynesia"},
{ dial: "", code: "TF", name:"French Southern Territories"},
{ dial: "241", code: "GA", name:"Gabon"},
{ dial: "220", code: "GM", name:"Gambia"},
{ dial: "995", code: "GE", name:"Georgia"},
{ dial: "49", code: "DE", name:"Germany"},
{ dial: "233", code: "GH", name:"Ghana"},
{ dial: "350", code: "GI", name:"Gibraltar"},
{ dial: "30", code: "GR", name:"Greece"},
{ dial: "299", code: "GL", name:"Greenland"},
{ dial: "1473", code: "GD", name:"Grenada"},
{ dial: "590", code: "GP", name:"Guadeloupe"},
{ dial: "1671", code: "GU", name:"Guam"},
{ dial: "502", code: "GT", name:"Guatemala"},
{ dial: "224", code: "GN", name:"Guinea"},
{ dial: "245", code: "GW", name:"Guinea-Bissau"},
{ dial: "592", code: "GY", name:"Guyana"},
{ dial: "509", code: "HT", name:"Haiti"},
{ dial: "", code: "HM", name:"Heard &amp; McDonald Islands"},
{ dial: "504", code: "HN", name:"Honduras"},
{ dial: "852", code: "HK", name:"Hong Kong"},
{ dial: "36", code: "HU", name:"Hungary"},
{ dial: "354", code: "IS", name:"Iceland"},
{ dial: "91", code: "IN", name:"India"},
{ dial: "62", code: "ID", name:"Indonesia"},
{ dial: "964", code: "IQ", name:"Iraq"},
{ dial: "353", code: "IE", name:"Ireland"},
{ dial: "98", code: "IR", name:"Islamic Republic of Iran"},
{ dial: "972", code: "IL", name:"Israel"},
{ dial: "39", code: "IT", name:"Italy"},
{ dial: "1876", code: "JM", name:"Jamaica"},
{ dial: "81", code: "JP", name:"Japan"},
{ dial: "962", code: "JO", name:"Jordan"},
{ dial: "7", code: "KZ", name:"Kazakhstan"},
{ dial: "254", code: "KE", name:"Kenya"},
{ dial: "686", code: "KI", name:"Kiribati"},
{ dial: "850", code: "KP", name:"Korea, Democratic People's Republic of"},
{ dial: "82", code: "KR", name:"Korea, Republic of"},
{ dial: "965", code: "KW", name:"Kuwait"},
{ dial: "996", code: "KG", name:"Kyrgyzstan"},
{ dial: "856", code: "LA", name:"Lao People's Democratic Republic"},
{ dial: "371", code: "LV", name:"Latvia"},
{ dial: "961", code: "LB", name:"Lebanon"},
{ dial: "266", code: "LS", name:"Lesotho"},
{ dial: "231", code: "LR", name:"Liberia"},
{ dial: "218", code: "LY", name:"Libyan Arab Jamahiriya"},
{ dial: "423", code: "LI", name:"Liechtenstein"},
{ dial: "370", code: "LT", name:"Lithuania"},
{ dial: "352", code: "LU", name:"Luxembourg"},
{ dial: "853", code: "MO", name:"Macau"},
{ dial: "261", code: "MG", name:"Madagascar"},
{ dial: "265", code: "MW", name:"Malawi"},
{ dial: "60", code: "MY", name:"Malaysia"},
{ dial: "960", code: "MV", name:"Maldives"},
{ dial: "223", code: "ML", name:"Mali"},
{ dial: "356", code: "MT", name:"Malta"},
{ dial: "692", code: "MH", name:"Marshall Islands"},
{ dial: "596", code: "MQ", name:"Martinique"},
{ dial: "222", code: "MR", name:"Mauritania"},
{ dial: "230", code: "MU", name:"Mauritius"},
{ dial: "262", code: "YT", name:"Mayotte"},
{ dial: "52", code: "MX", name:"Mexico"},
{ dial: "691", code: "FM", name:"Micronesia"},
{ dial: "373", code: "MD", name:"Moldova, Republic of"},
{ dial: "377", code: "MC", name:"Monaco"},
{ dial: "976", code: "MN", name:"Mongolia"},
{ dial: "664", code: "MS", name:"Monserrat"},
{ dial: "382", code: "ME", name:"Montenegro "},
{ dial: "212", code: "MA", name:"Morocco"},
{ dial: "258", code: "MZ", name:"Mozambique"},
{ dial: "95", code: "MM", name:"Myanmar"},
{ dial: "264", code: "NA", name:"Namibia"},
{ dial: "674", code: "NR", name:"Nauru"},
{ dial: "977", code: "NP", name:"Nepal"},
{ dial: "31", code: "NL", name:"Netherlands"},
{ dial: "599", code: "AN", name:"Netherlands Antilles"},
{ dial: "687", code: "NC", name:"New Caledonia"},
{ dial: "64", code: "NZ", name:"New Zealand"},
{ dial: "505", code: "NI", name:"Nicaragua"},
{ dial: "227", code: "NE", name:"Niger"},
{ dial: "234", code: "NG", name:"Nigeria"},
{ dial: "683", code: "NU", name:"Niue"},
{ dial: "672", code: "NF", name:"Norfolk Island"},
{ dial: "1670", code: "MP", name:"Northern Mariana Islands"},
{ dial: "47", code: "NO", name:"Norway"},
{ dial: "968", code: "OM", name:"Oman"},
{ dial: "", code: "OT", name:"Other"},
{ dial: "92", code: "PK", name:"Pakistan"},
{ dial: "680", code: "PW", name:"Palau"},
{ dial: "", code: "PS", name:"Palestinian Territory, Occupied"},
{ dial: "507", code: "PA", name:"Panama"},
{ dial: "675", code: "PG", name:"Papua New Guinea"},
{ dial: "595", code: "PY", name:"Paraguay"},
{ dial: "51", code: "PE", name:"Peru"},
{ dial: "63", code: "PH", name:"Philippines"},
{ dial: "870", code: "PN", name:"Pitcairn"},
{ dial: "48", code: "PL", name:"Poland"},
{ dial: "351", code: "PT", name:"Portugal"},
{ dial: "1", code: "PR", name:"Puerto Rico"},
{ dial: "974", code: "QA", name:"Qatar"},
{ dial: "", code: "RE", name:"Réunion"},
{ dial: "40", code: "RO", name:"Romania"},
{ dial: "7", code: "RU", name:"Russian Federation"},
{ dial: "250", code: "RW", name:"Rwanda"},
{ dial: "590", code: "BL", name:"Saint Barthelemy"},
{ dial: "1758", code: "LC", name:"Saint Lucia"},
{ dial: "1599", code: "MF", name:"Saint Martin"},
{ dial: "685", code: "WS", name:"Samoa"},
{ dial: "378", code: "SM", name:"San Marino"},
{ dial: "239", code: "ST", name:"Sao Tome & Principe"},
{ dial: "966", code: "SA", name:"Saudi Arabia"},
{ dial: "221", code: "SN", name:"Senegal"},
{ dial: "381", code: "RS", name:"Serbia"},
{ dial: "248", code: "SC", name:"Seychelles"},
{ dial: "232", code: "SL", name:"Sierra Leone"},
{ dial: "65", code: "SG", name:"Singapore"},
{ dial: "421", code: "SK", name:"Slovakia"},
{ dial: "386", code: "SI", name:"Slovenia"},
{ dial: "677", code: "SB", name:"Solomon Islands"},
{ dial: "252", code: "SO", name:"Somalia"},
{ dial: "27", code: "ZA", name:"South Africa"},
{ dial: "", code: "GS", name:"South Georgia and the South Sandwich Islands"},
{ dial: "34", code: "ES", name:"Spain"},
{ dial: "94", code: "LK", name:"Sri Lanka"},
{ dial: "290", code: "SH", name:"St. Helena"},
{ dial: "1869", code: "KN", name:"St. Kitts and Nevis"},
{ dial: "508", code: "PM", name:"St. Pierre &amp; Miquelon"},
{ dial: "1784", code: "VC", name:"St. Vincent &amp; the Grenadines"},
{ dial: "249", code: "SD", name:"Sudan"},
{ dial: "597", code: "SR", name:"Suriname"},
{ dial: "", code: "SJ", name:"Svalbard &amp; Jan Mayen Islands"},
{ dial: "268", code: "SZ", name:"Swaziland"},
{ dial: "46", code: "SE", name:"Sweden"},
{ dial: "41", code: "CH", name:"Switzerland"},
{ dial: "963", code: "SY", name:"Syrian Arab Republic"},
{ dial: "886", code: "TW", name:"Taiwan, Province of China"},
{ dial: "992", code: "TJ", name:"Tajikistan"},
{ dial: "255", code: "TZ", name:"Tanzania, United Republic of"},
{ dial: "66", code: "TH", name:"Thailand"},
{ dial: "670", code: "TL", name:"Timor-Leste"},
{ dial: "228", code: "TG", name:"Togo"},
{ dial: "690", code: "TK", name:"Tokelau"},
{ dial: "676", code: "TO", name:"Tonga"},
{ dial: "1868", code: "TT", name:"Trinidad &amp; Tobago"},
{ dial: "216", code: "TN", name:"Tunisia"},
{ dial: "90", code: "TR", name:"Turkey"},
{ dial: "993", code: "TM", name:"Turkmenistan"},
{ dial: "1649", code: "TC", name:"Turks &amp; Caicos Islands"},
{ dial: "688", code: "TV", name:"Tuvalu"},
{ dial: "256", code: "UG", name:"Uganda"},
{ dial: "380", code: "UA", name:"Ukraine"},
{ dial: "971", code: "AE", name:"United Arab Emirates"},
{ dial: "44", code: "UK", name:"United Kingdom"},
{ dial: "44", code: "GB", name:"United Kingdom (Great Britain)"},
{ dial: "", code: "UM", name:"United States Minor Outlying Islands"},
{ dial: "1", code: "US", name:"United States of America"},
{ dial: "1340", code: "VI", name:"United States Virgin Islands"},
{ dial: "598", code: "UY", name:"Uruguay"},
{ dial: "998", code: "UZ", name:"Uzbekistan"},
{ dial: "678", code: "VU", name:"Vanuatu"},
{ dial: "39", code: "VA", name:"Vatican City State (Holy See)"},
{ dial: "58", code: "VE", name:"Venezuela"},
{ dial: "84", code: "VN", name:"Viet Nam"},
{ dial: "681", code: "WF", name:"Wallis &amp; Futuna Islands"},
{ dial: "212", code: "EH", name:"Western Sahara"},
{ dial: "967", code: "YE", name:"Yemen"},
{ dial: "381", code: "YU", name:"Yugoslavia"},
{ dial: "260", code: "ZM", name:"Zambia"},
{ dial: "263", code: "ZW", name:"Zimbabwe"},
]

const FLIGHT_CODE_OPTIONS: Object[] = [
  {value: "0", display: {
    "en-gb": "Not Applicable",
    "ko-kr": "기타",
    "ja-jp": "不明",
    "ms-my": "Tidak Berkenaan",
    "id-id": "Tidak Berlaku",
    "zh-cn": "不适用",
    "zh-hk": "不適用",
    "th-th": "ไม่ระบุเที่ยวบิน"
    }
  },
  {value: "1", display: "AK"},
  {value: "2", display: "D7"},
  {value: "3", display: "FD"},
  {value: "4", display: "QZ"},
  {value: "8", display: "Z2"},
  {value: "9", display: "I5"},
  {value: "10", display: "XJ"},
  {value: "11", display: "XT"},
  {value: "12", display: "DJ"}
]

const TYPE_OPTIONS: Object = {
  "en-gb": {
    9: [
      {display: "About AirAsia", value: "88"},
      {display: "Personnel", value: "87"}
    ],
    4: [
      {display: "About AirAsia", value: "89"},
      {display: "Big Loyalty Programme", value: "90"},
      {display: "Baggage", value: "95"},
      {display: "Duty Free", value: "107"},
      {display: "Payment", value: "92"},
      {display: "Product & Services", value: "93"},
      {display: "Sales", value: "94"},
      {display: "Traveler Guide", value: "91"},
    ],
    12: [
      {display: "AirAsia Insure", value: "519"},
      {display: "Document Request", value: "520"},
      {display: "Member Email Change", value: "106"},
      {display: "Modify Booking", value: "104"},
      {display: "New Booking", value: "102"},
      {display: "Preflight", value: "105"},
    ],
    1: [
      {display: "Airport & Transportation", value: "79"},
      {display: "Big Loyalty Programme", value: "81"},
      {display: "Baggage", value: "10"},
      {display: "Customer Service", value: "77"},
      {display: "Duty Free", value: "108"},
      {display: "Flight Schedule & Safety", value: "78"},
      {display: "In-flight Services & Products", value: "80"},
      {display: "Manage My Booking / Check In", value: "82"},
      {display: "New Booking", value: "83"},
      {display: "Payment", value: "84"},
      {display: "Personnel", value: "85"},
      {display: "Refund Request", value: "86"},
    ],
    8: [
      {
        display: "Airport Tax",
        value: "245",
        popup: {
          title: "Airport Tax",
          main: "All refund requests must meet the following criterias:",
          list: [
            { main: "Must be submitted within six (6) months after your flight(s) have departed.", secondary: [""] },
            { main: "One (1) or more guests did not board the flight(s)", secondary: [""] },
            { main: "Refund requests back to original payment mode are subject to refund fee (per guest per sector) where applicable.", secondary: "" },
            {
              main: "Refund fee will be exempted for:",
              secondary: [
              "All AirAsia Thailand (FD), AirAsia X Thailand (XJ) & AirAsia India (I5) flights.",
              "All flights departing from Thailand.",
              "All flights departing from Hong Kong."
              ]
            },
          ],
          extra: "Note: Guests who did not board their flight departing from Manila Philippines can request for International Passenger Service Charge refund, within one (1) year from the booking date. Refund fee will be exempted."
        }
      },
      {
        display: "Double Payment",
        value: "250",
        popup: {
          title: "Double Payment",
          main: "Refund requests can be submitted if you have been charged more than once for the same booking number (e.g. credit card charged twice). Approved refund requests for the double charged amount will be refunded back to the original mode of payment based on the second or subsequent transactions.",
          list: [""],
          extra: ""
        }
      },
      {
        display: "Duplicate Booking",
        value: "249",
        popup: {
          title: "Duplicate Booking",
          main: "All refund requests must meet the following criterias:",
          list: [
            { main: "Both bookings must be for the same date(s). flight sector(s) and destinations (origin and destination)", secondary: [""] },
            { main: "Both bookings must have the same guest name list", secondary: [""] },
            { main: "Must be submitted before the departure date of your flight.", secondary: [""]}
          ],
          extra: "Kindly note that we will maintain your first booking (based on the creation date and time) as a confirmed booking. Any approved refund requests will be processed for the 2nd or subsequent booking(s)."
        }
      },
      {
        display: "Duty Free",
        value: "109",
        popup: {
          title: "Duty Free",
          main: "Refunds for duty free purchases are only applicable for:",
          list: [
            { main: "Defective items", secondary: [""] },
            { main: "Lowest Price Guarantee (where you match your purchase with a lower price)", secondary: [""] },
            { main: "Flight cancellations *", secondary: [""] },
            { main: "Missed flights *", secondary: [""] },
            { main: "Order cancellations *", secondary: [""]}
          ],
          extra: "* For pre-booked duty free purchases only"
        }
      },
      {
        display: "Flight Cancellation",
        value: "511",
        popup: {
          title: "Flight Cancellation",
          main: "Refund requests can only be submitted if the flight was a scheduled cancellation by AirAsia.",
          list: [""],
          extra: ""
        }
      },
      {
        display: "Flight Reschedule",
        value: "513",
        popup: {
          title: "Flight Reschedule",
          main: "Refund requests can only be submitted if flight was re-timed more than 3 hours from the original scheduled departure time.",
          list: [""],
          extra: ""
        }
      }
    ]
  },
  "ko-kr": {
    9: [
      {display: "AirAsia에 관하여", value: "88"},
      {display: "직원", value: "87"}
    ],
    4: [
      {display: "AirAsia에 관하여", value: "89"},
      {display: "Big Loyalty Programme", value: "90"},
      {display: "수하물", value: "95"},
      {display: "면세", value: "107"},
      {display: "결제", value: "92"},
      {display: "상품 및 서비스", value: "93"},
      {display: "판매", value: "94"},
      {display: "여행자 가이드", value: "91"},
    ],
    12: [
      {display: "AirAsia Insure", value: "519"},
      {display: "서류 요청", value: "520"},
      {display: "회원 이메일 변경", value: "106"},
      {display: "예약 수정", value: "104"},
      {display: "신규 예약", value: "102"},
      {display: "출발 전 변경사항", value: "105"},
    ],
    1: [
      {display: "공항 및 교통", value: "79"},
      {display: "Big Loyalty Programme", value: "81"},
      {display: "수하물", value: "10"},
      {display: "고객 서비스", value: "77"},
      {display: "면세", value: "108"},
      {display: "항공편 일정 및 안전", value: "78"},
      {display: "기내 서비스 및 상품", value: "80"},
      {display: "나의 예약 관리 / 체크인", value: "82"},
      {display: "신규 예약", value: "83"},
      {display: "결제", value: "84"},
      {display: "직원", value: "85"},
      {display: "환불 요청", value: "86"},
    ],
    8: [
      {
        display: "공항세",
        value: "245",
        popup: {
           title: "공항세 환불",
           main: "모든 환불 요청들은 아래의 모든 기준을 충족시키셔야 함",
           list: [
             { main: "비행 출발일 기준 6개월 이내로 환불 요청이 제출되어야 함", secondary: [""]},
             { main: "한 명 또는 그 이상의 미탑승 승객이 있는 경우", secondary: [""]},
             { main: "환불 수수료는 이용하신 결제수단으로 환불 처리가 가능함(한 구간의 승객 한 명)", secondary: [""]},
             {
               main: "아래의 비행 편들의 환불 수수료는 제외 됨",
               secondary: [
                 "모든 AirAsia Thailand (FD), AirAsia X Thailand (XJ) & AirAsia India (I5) 비행 편들",
                 "모든 태국 출발 비행 편들",
                 "모든 홍콩 출발 비행 편들"
               ]
             }
           ],
           extra: "알림: 필리핀 마닐라 출발 비행 편의 미탑승으로 인한 국제여객 수송 요금 환불 처리는 예약일로부터 1년 이내에 환불 처리가 가능합니다"
         }
       },
      {
        display: "이중 결제",
        value: "250",
        popup: {
           title: "중복 결제",
           main: "동일한 예약번호가 한 번 이상 결제가 된 경우에 환불 요청이 가능합니다(ex. 신용카드가 두 번 결제된 경우). 두 번째 또는 이후에 결제된 중복된 금액의 환불은 이용하신 결제수단으로 환불 처리가 됩니다",
           list: [""],
           extra: ""
         }
       },
      {
        display: "중복예약",
        value: "249",
        popup: {
           title: "중복 예약",
           main: "모든 환불 요청들은 아래의 모든 기준을 충족시키셔야 함:",
           list: [
             { main: "모든 예약들은 동일한 날짜여야 함. 비행 구간 그리고 목적지(출발지 그리고 도착지) 포함", secondary: [""]},
             { main: "모든 예약들에는 동일한 탑승객으로 구성되어 있어야 함", secondary: [""]},
             { main: "반드시 출발일 전에 환불 요청을 해야만 함", secondary: [""]},
           ],
           extra: "당사는 확약된 첫 번째 예약(예약이 생성된 그리고 시간 기준)을 유지할 것이며, 두 번째 또는 이후에 생성된 예약이 환불 처리됨을 알려드립니다"
         }
       },
      {
        display: "면세",
        value: "109",
        popup: {
           title: "면세",
           main: "구매한 면세품 환불은 다음 경우에만 해당됩니다",
           list: [
             { main: "제품 불량", secondary: [""]},
             { main: "최저가 보장(최저가가 아닌 경우)", secondary: [""]},
             { main: "항공편 취소 *", secondary: [""]},
             { main: "항공편에 탑승하지 못함 *", secondary: [""]},
             { main: "주문 취소 *", secondary: [""]}
           ],
           extra: "* 사전 예약한 면세품 구매만 해당"
         }
       },
      {
        display: "결항편",
        value: "511",
        popup: {
           title: "항공기 결항",
           main: "에어아시아로부터 예정된 결항 편에 한해 환불 신청이 가능함.",
           list: [""],
           extra: ""
         }
       },
      {
        display: "출발시각변경편",
        value: "513",
        popup: {
           title: "항공기 일정 변경",
           main: "예정된 출발시각으로부터 비행편이 3시간 이상 일정 변경된 경우 환불 처리가 가능함",
           list: [""],
           extra: ""
         }
       }
    ]
  },
  "ja-jp": {
    9: [
      {display: "エアアジアについて", value: "88"},
      {display: "スタッフについて", value: "87"}
    ],
    4: [
      {display: "エアアジアについて", value: "89"},
      {display: "Big Loyalty Programme", value: "90"},
      {display: "手荷物", value: "95"},
      {display: "免税品", value: "107"},
      {display: "支払い", value: "92"},
      {display: "商品＆サービス", value: "93"},
      {display: "販売", value: "94"},
      {display: "トラベルガイド", value: "91"},
    ],
    12: [
      {display: "AirAsia Insure(エアアジア旅行保険)", value: "519"},
      {display: "証明書・書類請求", value: "520"},
      {display: "会員のEメールアドレス変更", value: "106"},
      {display: "予約の変更", value: "104"},
      {display: "新しい予約", value: "102"},
      {display: "飛行前", value: "105"},
    ],
    1: [
      {display: "空港と交通手段", value: "79"},
      {display: "Big Loyalty Programme", value: "81"},
      {display: "手荷物", value: "10"},
      {display: "カスタマーサービス", value: "77"},
      {display: "免税品", value: "108"},
      {display: "フライトスケジュール＆安全について", value: "78"},
      {display: "機内サービス＆商品", value: "80"},
      {display: "マイ・ブッキング/チェックイン", value: "82"},
      {display: "新しい予約", value: "83"},
      {display: "支払い", value: "84"},
      {display: "スタッフについて", value: "85"},
      {display: "払い戻しのリクエスト", value: "86"},
    ],
    8: [
      {
        display: "空港税", value: "245",
        popup: {
          title: "空港税について",
          main: "空港税の返金申請は、下記の要件を満たしている必要がございます",
          list: [
            {main: "該当する便が出発してから６ヶ月以内に申請されること", secondary: [""]},
            {main: "予約に対し、搭乗していないお客様が１名、またはそれ以上であること", secondary: [""]},
            {main: "返金にあたり、お客様1名様あたり・また1区間あたりに返金手数料を差し引いた額をお支払いいただいた先に返金させていただきます", secondary: [""]},
            {main: "下記要件に該当する場合、返金手数料は発生致しません", secondary: [
              "タイ・エアアジア（FD）、タイ・エアアジアXタイ（XJ）、エアアジア・インディア（I５）の全ての便",
              "タイから出発する、全ての便",
              "香港から出発する、全ての便"
            ]},
          ],
          extra: "追記：フィリピン・マニラ(ニノイ・アキノ国際空港)出発の便にて搭乗されなかったお客様は、予約日から１年以内であれば、国際線旅客サービス料(International Passenger Service Charge) の返金申請が可能です。※返金手数料は発生いたしません"
        }
      },
      {
        display: "二重支払い", value: "250",
        popup: {
          title: "重複支払いについて",
          main: "同一の予約番号に対し複数のお支払いが行われた場合は、返金申請が可能です（例：クレジットカードでの重複支払い）。承認された重複支払いの返金申請は、お支払い頂いた方法に基づき処理がなされます",
          list: [],
          extra: ""
        }
      },
      {
        display: "重複予約", value: "249",
        popup: {
          title: "",
          main: "",
          list: [],
          extra: ""
        }
      },
      {
        display: "免税品", value: "109",
        popup: {
          title: "免税品",
          main: "免税品購入の払い戻しは以下に限られます",
          list: [
            { main: "欠陥品", secondary: ""},
            { main: "最安値保証 (安い方の価格で購入)", secondary: ""},
            { main: "欠航 *", secondary: ""},
            { main: "乗り遅れ *", secondary: ""},
            { main: "オーダー取り消し *", secondary: ""}
          ],
          extra: "* 事前予約の免税品購入のみ"
        }
      },
      {
        display: "欠航便", value: "511",
        popup: {
          title: "欠航便について",
          main: "エアアジアに起因する原因の欠航便においてのみ、返金申請が可能です",
          list: [],
          extra: ""
        }
      },
      {
        display: "出発時刻変更便", value: "513",
        popup: {
          title: "便の変更について",
          main: "本来の予約上の予定出発時間から３時間を越えた便の時刻変更が発生した場合のみ、返金申請が可能です",
          list: [],
          extra: ""
        }
      }
    ]
  },
  "ms-my": {
    9: [
      {display: "Tentang AirAsia", value: "88"},
      {display: "Kakitangan", value: "87"}
    ],
    4: [
      {display: "Tentang AirAsia", value: "89"},
      {display: "Big Loyalty Programme", value: "90"},
      {display: "Bagasi", value: "95"},
      {display: "Barang Bebas Cukai", value: "107"},
      {display: "Pembayaran", value: "92"},
      {display: "Produk & perkhidmatan", value: "93"},
      {display: "Jualan", value: "94"},
      {display: "Panduan Perjalanan Untuk Penumpang", value: "91"},
    ],
    12: [
      {display: "AirAsia Insure", value: "519"},
      {display: "Permintaan dokumen", value: "520"},
      {display: "Perubahan E-mel Ahli", value: "106"},
      {display: "Ubah suai tempahan", value: "104"},
      {display: "Tempahan baru", value: "102"},
      {display: "Preflight", value: "105"},
    ],
    1: [
      {display: "Lapangan terbang dan pengangkutan", value: "79"},
      {display: "Big Loyalty Programme", value: "81"},
      {display: "Bagasi", value: "10"},
      {display: "Khidmat pelanggan", value: "77"},
      {display: "Barang Bebas Cukai", value: "108"},
      {display: "Jadual penerbangan & keselamatan", value: "78"},
      {display: "Perkhidmatan & produk dalam penerbangan", value: "80"},
      {display: "Urus Tempahan Saya / Daftar Masuk", value: "82"},
      {display: "Tempahan baru", value: "83"},
      {display: "Pembayaran", value: "84"},
      {display: "Kakitangan", value: "85"},
      {display: "Permohonan bayaran balik", value: "86"},
    ],
    8: [
      {
        display: "Cukai lapangan terbang",
        value: "245",
        popup: {
          title: "Cukai Lapangan Terbang",
          main: "Semua permintaan pemulangan bayaran haruslah memenuhi kriteria berikut:",
          list: [
            { main: "Haruslah dikemukakan dalam tempoh enam (6) bulan selepas tarikh penerbangan", secondary: []},
            { main: "Satu (1) atau lebih penumpang tidak menaiki penerbangan", secondary: []},
            { main: "Permintaan pemulangan bayaran ke mod pembayaran asal adalah tertakluk kepada yuran bayaran balik (setiap penumpang bagi setiap sektor) yang berkenaan", secondary: []},
            {
              main: "Yuran bayaran balik akan dikecualikan bagi:",
              secondary: [
                "Semua penerbangan AirAsia Thailand (FD), AirAsia X Thailand (XJ) & AirAsia India (I5)",
                "Semua penerbangan yang berlepas dari Thailand",
                "Semua penerbangan yang berlepas dari Hong Kong"
              ]
            }
          ],
          extra: "Nota: Para penumpang yang tidak menaiki penerbangan mereka berlepas dari Manila, Filipina boleh meminta bayaran balik Caj Perkhidmatan Penumpang Antarabangsa, dalam tempoh satu (1) tahun dari tarikh tempahan. Caj bayaran balik tidak akan dikenakan"
        }
      },
      {
        display: "Pembayaran dua kali",
        value:"250",
        popup: {
          title: "Pembayaran Berganda",
          main: "Permintaan bayaran balik boleh dikemukakan jika anda telah dikenakan bayaran lebih daripada sekali bagi nombor tempahan yang sama (contohnya kad kredit anda dicaj dua kali). Permintaan bayaran balik yang diluluskan untuk jumlah berganda yang dikenakan akan dikembalikan semula ke mod asal pembayaran berdasarkan transaksi kedua atau yang berikutnya",
          list: [],
          extra: ""
        }
      },
      {
        display: "Tempahan Berganda",
        value: "249",
        popup: {
          title: "Tempahan Berganda",
          main: "Semua permintaan bayaran balik haruslah memenuhi kriteria berikut:",
          list: [
            { main: "Kedua-dua tempahan haruslah untuk tarikh, sektor penerbangan dan destinasi (lapangan terbang berlepas dan ketibaan) yang sama", secondary: []},
            { main: "Kedua-dua tempahan haruslah mempunyai senarai nama penumpang yang sama", secondary: []},
            { main: "Mesti dikemukakan sebelum tarikh berlepas untuk penerbangan anda", secondary: []}
          ],
          extra: "Sila ambil perhatian bahawa kami akan mengekalkan tempahan pertama anda (berdasarkan tarikh dan masa tempahan dibuat) sebagai tempahan yang sah. Sebarang permintaan pembayaran balik yang diluluskan akan diproses untuk tempahan kedua atau berikutnya"
        }
      },
      {
        display: "Barang Bebas Cukai",
        value: "109",
        popup: {
          title: "Barang Bebas Cukai",
          main: "Bayaran balik pembelian bebas cukai hanya digunakan untuk:",
          list: [
            { main: "Barangan rosak", secondary: []},
            { main: "Jaminan Harga Terendah (di mana kamu dapat memadankan pembelian anda dengan harga yang lebih rendah)", secondary: []},
            { main: "Pembatalan penerbangan *", secondary: []},
            { main: "Penerbangan terlepas *", secondary: []},
            { main: "Pembatalan tempahan *", secondary: []},
          ],
          extra: "* Untuk pembelian bebas cukai pra-tempahan sahaja"
        }
      },
      {
        display: "Pembatalan Penerbangan",
        value: "511",
        popup: {
          title: "Pembatalan penerbangan",
          main: "Permintaan bayaran balik hanya boleh dikemukakan jika jadual penerbangan telah dibatalkan oleh AirAsia",
          list: [],
          extra: ""
        }
      },
      {
        display: "Perubahan Jadual Penerbangan",
        value: "513",
        popup: {
          title: "Perubahan Jadual Penerbangan",
          main: "Permintaan bayaran balik hanya boleh dikemukakan jika jadual penerbangan mengalami perubahan lebih dari 3 jam dari jadual perlepasan asal",
          list: [],
          extra: ""
        }
      }
    ]
  },
  "id-id": {
    9: [
      {display: "Tentang AirAsia", value: "88"},
      {display: "Personil", value: "87"}
    ],
    4: [
      {display: "Tentang AirAsia", value: "89"},
      {display: "Big Loyalty Programme", value: "90"},
      {display: "Bagasi", value: "95"},
      {display: "Duty Free", value: "107"},
      {display: "Pembayaran", value: "92"},
      {display: "Produk & layanan", value: "93"},
      {display: "Penjualan", value: "94"},
      {display: "Panduan Penumpang", value: "91"},
    ],
    12: [
      {display: "AirAsia Insure", value: "519"},
      {display: "Permintaan dokumen", value: "520"},
      {display: "Perubahan Email Anggota", value: "106"},
      {display: "Perubahan Pemesanan Penerbangan", value: "104"},
      {display: "Pemesanan baru", value: "102"},
      {display: "Preflight", value: "105"},
    ],
    1: [
      {display: "Bandara dan transportasi", value: "79"},
      {display: "Big Loyalty Programme", value: "81"},
      {display: "Bagasi", value: "10"},
      {display: "Layanan pelanggan", value: "77"},
      {display: "Bebas pajak", value: "108"},
      {display: "Jadwal penerbangan dan keamanan", value: "78"},
      {display: "Layanan dan produk di dalam pesawat", value: "80"},
      {display: "Mengatur Pembelian Saya / Check-In", value: "82"},
      {display: "Pemesanan baru", value: "83"},
      {display: "Pembayaran", value: "84"},
      {display: "Personil", value: "85"},
      {display: "Permintaan refund", value: "86"},
    ],
    8: [
      {
        display: "Pajak Bandara",
        value: "245",
        popup: {
          title: "Pajak Bandara",
          main: "Untuk semua permintaan yang diajukan harus memenuhi kriteria berikut dibawah ini:",
          list: [
            { main: "Diajukan dalam kurun waktu tidak lebih 6 (enam) bulan setelah tanggal keberangkatan", secondary: []},
            { main: "Penumpang yang bersangkutan tidak mengikuti penerbangan tersebut", secondary: []},
            { main: "Proses pengembalian biaya (refund) yang diajukan akan dikembalikan ke akun pembayaran semula dan akan dikenakan biaya refund (per orang per sektor)", secondary: []},
            {
              main: "Biaya refund tidak akan dikenakan untuk penerbangan dibawah ini:",
              secondary: [
                "Semua penerbangan AirAsia Thailand (FD), AirAsia X Thailand (XJ) dan AirAsia India (I5)",
                "Semua penerbangan yang berangkat dari Thailand",
                "Semua penerbangan yang berangkat dari Hongkong"
              ]
            }
          ],
          extra: "Catatan: Untuk penumpang yang tidak dapat mengikuti penerbangan dari Manila Filipina, International Passenger Service Charge (LI) dapat mengajukan permintaan pengembalian biaya tersebut dalam kurun waktu 1 (satu) tahun setelah tanggal pembelian tanpa dikenakan biaya"
        }
      },
      {
        display: "Pembayaran Ganda",
        value: "250",
        popup: {
          title: "Pembayaran Ganda",
          main:"Permintaan pengembalian biaya hanya dapat diajukan apabila terdapat lebih dari 1 (satu) pembayaran yang sama untuk pemesanan penerbangan anda (misalnya: pembayaran ganda dengan menggunakan kartu kredit yang sama).Pengajuan pengembalian biaya yang disetujui akan diproses ke akun pembayaran semula berdasarkan pada transaksi kedua atau berikutnya",
          list:[],
          extra:""
        }
      },
      {
        display: "Pemesanan Ganda",
        value: "249",
        popup: {
          title: "Pemesanan Ganda",
          main:"Untuk semua permintaan yang diajukan harus memenuhi kriteria berikut dibawah ini:",
          list: [
            { main: "Kedua pemesanan merupakan pemesanan penerbangan dengan tanggal, sektor dan rute yang sama (keberangkatan dan tujuan)", secondary: []},
            { main: "Kedua pemesanan memiliki nama tamu yang sama", secondary: []},
            { main: "Permintaan pengembalian biaya diajukan sebelum tanggal keberangkatan penerbangan", secondary: []}
          ],
          extra:"Mohon agar dapat diketahui bahwa pemesanan penerbangan yang dapat digunakan adalah pemesanan yang pertama yang ditentukan berdasarkan tanggal dan waktu pembelian. Pengajuan pengembalian biaya yang disetujui akan diproses untuk pemesanan penerbangan yang kedua atau berikutnya"
        }
      },
      {
        display: "Bebas pajak",
        value: "109",
        popup: {
          title: "Bebas pajak",
          main:"Pengembalian dana untuk pembelian bebas-pajak hanya berlaku untuk:",
          list:[
            { main: "Barang cacat", secondary: []},
            { main: "Jaminan Harga Terendah (mencocokkan pembelian dengan harga yang lebih rendah )", secondary: []},
            { main: "Pembatalan penerbangan *", secondary: []},
            { main: "Penerbangan yang terlewat *", secondary: []},
            { main: "Pembatalan pesanan *", secondary: []}
          ],
          extra:"* Untuk pembelian barang bebas pajak yang dibeli sebelum tanggal penerbangan"
        }
      },
      {
        display: "Penerbangan dibatalkan",
        value: "511",
        popup: {
          title: "Pembatalan Penerbangan",
          main:"Permintaan pengembalian biaya hanya dapat diajukan apabila penerbangan dibatalkan oleh AirAsia",
          list:[],
          extra:""
        }
      },
      {
        display: "Penerbangan Berubah Jadwal",
        value: "513",
        popup: {
          title: "Perubahan Jadwal Penerbangan",
          main: "Permintaan pengembalian biaya hanya dapat diajukan apabila penerbangan mengalami perubahan jadwal lebih dari 3 (tiga) jam dari jadwal semula",
          list:[],
          extra:""
        }
      }
    ]
  },
  "zh-cn": {
    9: [
      {display: "关于亚航", value: "88"},
      {display: "人员", value: "87"}
    ],
    4: [
      {display: "关于亚航", value: "89"},
      {display: "Big Loyalty Programme", value: "90"},
      {display: "行李", value: "95"},
      {display: "免税", value: "107"},
      {display: "付款", value: "92"},
      {display: "产品及服务", value: "93"},
      {display: "销售", value: "94"},
      {display: "旅客指南", value: "91"},
    ],
    12: [
      {display: "AirAsia Insure", value: "519"},
      {display: "文件要求", value: "520"},
      {display: "会员电子邮件更改", value: "106"},
      {display: "修改预订", value: "104"},
      {display: "新预订", value: "102"},
      {display: "登机前", value: "105"},
    ],
    1: [
      {display: "机场及交通", value: "79"},
      {display: "Big Loyalty Programme", value: "81"},
      {display: "行李", value: "10"},
      {display: "客户服务", value: "77"},
      {display: "免税", value: "108"},
      {display: "航班时刻表及安全", value: "78"},
      {display: "机上服务及产品", value: "80"},
      {display: "管理我的预订/办理登机手续", value: "82"},
      {display: "新预订", value: "83"},
      {display: "付款", value: "84"},
      {display: "人员", value: "85"},
      {display: "退款要求", value: "86"},
    ],
    8: [
      {
        display: "机场税",
        value: "245",
        popup: {
          title:"机场税",
          main:"退税申请须符合以下条件:",
          list: [
            { main: "须在航班起飞后的6个月内提出申请", secondary: []},
            { main: "一个或以上的客人并无没有登机", secondary: []},
            { main: "机场税将会退还至您办理预订时的支付渠道, 退款手续费(按每人每段航班算)将会产生", secondary: []},
            {
              main: "以下航班将会免除退款手续费", secondary: [
                "所有泰国亚洲航空公司 (FD),亚航X泰国(XJ)印度亚洲航空(I5)航班",
                "从泰国出发的所有航班",
                "从香港出发的所有航班"
              ]
            }
          ],
          extra:"请注意：乘客如果没有乘搭已预定的亚洲航空从菲律宾马尼拉出发的航班，可以自订票日起一年内申请国际乘客服务费退款，免收退款手续费"
        }
      },
      {
        display: "重复付款",
        value: "250",
        popup: {
          title:"重复支付",
          main:"如果您同一个预订被收费两次或以上(如:信用卡被收费两次), 您可以对多收款项提出退款申请。符合退款条件的款项将会退至您原来支付第二笔或之后款项的相应支付渠道",
          list: [],
          extra:""
        }
      },
      {
        display: "重复预订",
        value: "249",
        popup: {
          title:"重复预订",
          main:"退款申请须符合以下条件:",
          list: [
            { main: "两个预订必须是同一个航班日期, 同样航线及地点(出发地及目的地)", secondary: []},
            { main: "两个预订的乘客姓名须一致", secondary: []},
            { main: "须在航班起飞之前提出申请", secondary: []}
          ],
          extra:"请注意, 我们将会保留您第一个预订(基于预订办理的日期及时间), 我们只会对第二个预订作出处理"
        }
      },
      {
        display: "免税",
        value: "109",
        popup: {
          title:"免税",
          main:"所购的免税品退款仅适用于:",
          list: [
            { main: "缺陷商品", secondary: []},
            { main: "最低价格保证（此时您可以将您的所购物与更低的价格进行匹配)", secondary: []},
            { main: "航班取消 *", secondary: []},
            { main: "误机 *", secondary: []},
            { main: "订单取消 *", secondary: []}
          ],
          extra:"* 仅限于预定的免税所购物"
        }
      },
      {
        display: "航班取消",
        value: "511",
        popup: {
          title:"航班取消",
          main:"如果您的航班因故被取消，您可以对此提出退款要求",
          list: [],
          extra:""
        }
      },
      {
        display: "航班调整",
        value: "513",
        popup: {
          title:"航班时间更改",
          main:"如果您的航班时间变动超过3小时或以上(从航班起飞时间起), 您可以对此提出退款要求",
          list: [],
          extra:""
        }
      }
    ]
  },
  "zh-hk": {
    9: [
      {display: "關於亞航", value: "88"},
      {display: "服務人員", value: "87"}
    ],
    4: [
      {display: "關於亞航", value: "89"},
      {display: "Big Loyalty Programme", value: "90"},
      {display: "行李", value: "95"},
      {display: "免稅購物", value: "107"},
      {display: "付款", value: "92"},
      {display: "產品及服務", value: "93"},
      {display: "銷售", value: "94"},
      {display: "旅客指南", value: "91"},
    ],
    12: [
      {display: "AirAsia Insure", value: "519"},
      {display: "要求文件", value: "520"},
      {display: "會員電郵變更", value: "106"},
      {display: "更改預訂", value: "104"},
      {display: "新的預訂", value: "102"},
      {display: "起飛前", value: "105"},
    ],
    1: [
      {display: "機場及交通", value: "79"},
      {display: "Big Loyalty Programme", value: "81"},
      {display: "行李", value: "10"},
      {display: "客戶服務", value: "77"},
      {display: "免稅購物", value: "108"},
      {display: "航班時間表及安全", value: "78"},
      {display: "機上服務及產品", value: "80"},
      {display: "管理我的訂位 / 登機手續", value: "82"},
      {display: "新的預訂", value: "83"},
      {display: "付款", value: "84"},
      {display: "服務人員", value: "85"},
      {display: "退款要求", value: "86"},
    ],
    8: [
      {
        display: "機場稅", value: "245",
        popup: {
          title:"機場稅",
          main:"退稅申請須符合以下條件:",
          list:[
            { main: "須在航班起飛後的6個月內提出申請", secondary: []},
            { main: "一個或以上的客人並無沒有登機", secondary: []},
            { main: "機場稅將會退還至您辦理預訂時的支付渠道, 退款手續費(按每人每段航班算)將會產生", secondary: []},
            {
              main: "以下航班將會免除退款手續費:",
              secondary: [
                  "所有泰國亞洲航空公司 (FD),亞航X泰國(XJ)印度亞洲航空(I5)航班",
                  "從香港出發的所有航班。從泰國出發的所有航班",
                  "從香港出發的所有航班"
              ]
            },
          ],
          extra:"請注意：乘客如果沒有乘搭已預定的亞洲航空從菲律賓馬尼拉出發的航班，可以自訂票日起一年內申請國際乘客服務費退款，免收退款手續費。搭已預定的亞洲航空從菲律賓馬尼拉出發的航班，可以自訂票日起一年內申請國際乘客服務費退款，免收退款手續費。"
        }
      },
      {
        display: "雙重付款", value: "250",
        popup: {
          title:"重複支付",
          main:"如果您同一個預訂被收費兩次或以上(如:信用卡被收費兩次), 您可以對多收款項提出退款申請。符合退款條件的款項將會退至您原來支付第二筆或之後款項的相應支付渠道",
          list:[],
          extra:""
        }
      },
      {
        display: "重複預訂", value: "249",
        popup: {
          title:"重複預訂",
          main:"退款申請須符合以下條件:",
          list:[
            { main: "兩個預訂必須是同一個航班日期, 同樣航線及地點(出發地及目的地)", secondary: []},
            { main: "兩個預訂的乘客姓名須一致", secondary: []},
            { main: "須在航班起飛之前提出申請", secondary: []}
          ],
          extra:"請注意, 我們將會保留您第一個預訂(基於預訂辦理的日期及時間), 我們只會對第二個預訂作出處理"
        }
      },
      {
        display: "免稅購物", value: "109",
        popup: {
          title:"免稅購物",
          main:"只有以下情況可對已售出之免稅商品進行退款:",
          list:[
            { main: "損壞的貨品", secondary: ""},
            { main: "符合最低價格擔保條款（當您提供更低價格之證明）", secondary: ""},
            { main: "航班被取消 *", secondary: ""},
            { main: "未能趕及登機 *", secondary: ""},
            { main: "取消訂單 *", secondary: ""}
          ],
          extra:"* 只適用於預定之免稅商品"
        }
      },
      {
        display: "航班取消", value: "511",
        popup: {
          title:"航班取消",
          main:"如果您的航班因故被取消，您可以對此提出退款要求",
          list:[],
          extra:""
        }
      },
      {
        display: "航班調整", value: "513",
        popup: {
          title:"航班時間更改",
          main:"如果您的航班時間變動超過3小時或以上(從航班起飛時間起), 您可以對此提出退款要求",
          list:[],
          extra:""
        }
      }
    ]
  },
  "th-th": {
    9: [
      {display: "เกี่ยวกับ AirAsia", value: "88"},
      {display: "บุคลากร", value: "87"}
    ],
    4: [
      {display: "เกี่ยวกับ AirAsia", value: "89"},
      {display: "BIG CARD บัตรสะสมคะแนน", value: "90"},
      {display: "สัมภาระ", value: "95"},
      {display: "ปลอดภาษี", value: "107"},
      {display: "การชำระเงิน", value: "92"},
      {display: "ผลิตภัณฑ์และบริการ", value: "93"},
      {display: "ฝ่ายขาย", value: "94"},
      {display: "คู่มือการเดินทาง", value: "91"},
    ],
    12: [
      {display: "แอร์เอเชียอินชัวร์", value: "519"},
      {display: "การแจ้งขอเอกสาร", value: "520"},
      {display: "สมาชิกเปลี่ยนอีเมล", value: "106"},
      {display: "การแก้ไขรายการจอง", value: "104"},
      {display: "รายการจองใหม่", value: "102"},
      {display: "ก่อนออกบิน", value: "105"},
    ],
    1: [
      {display: "สนามบินและการเดินทาง", value: "79"},
      {display: "BIG CARD บัตรสะสมคะแนน", value: "81"},
      {display: "สัมภาระ", value: "10"},
      {display: "บริการลูกค้า", value: "77"},
      {display: "ปลอดภาษี", value: "108"},
      {display: "ตารางบินและความปลอดภัย", value: "78"},
      {display: "บริการและผลิตภัณฑ์บนเที่ยวบิน", value: "80"},
      {display: "จัดการบุ๊กกิ้ง / เช็คอิน", value: "82"},
      {display: "รายการจองใหม่", value: "83"},
      {display: "การชำระเงิน", value: "84"},
      {display: "บุคลากร", value: "85"},
      {display: "ขอเงินคืน", value: "86"},
    ],
    8: [
      {
        display: "ภาษีสนามบิน", value: "245",
        popup: {
          title:"ภาษีสนามบิน",
          main:"หลักเกณฑ์การขอคืนค่าภาษีสนามบิน :",
          list:[
            { main: "จะต้องยื่นคำร้องภายใน 6 เดือนหลังจากกำหนดการเดินทาง", secondary: []},
            { main: "มีผู้โดยสารอย่างน้อย 1 ท่านหรือทั้งหมด ไม่ได้เดินทางในหมายเลขการเดินทางดังกล่าว", secondary: []},
            { main: "การคืนเงินจะดำเนินการคืนเข้าช่องทางการจ่ายเงินของหมายเลขการสำรองที่นั่งนั้นๆ และอาจมีค่าธรรมเนียมในการดำเนินการขอคืนค่าภาษีสนามบิน (ต่อท่านต่อเที่ยวบิน)", secondary: []},
            {
              main: "ค่าธรรมเนียมการขอคืนค่าภาษีสนามบิน จะได้รับการยกเว้นในกรณี ดังนี้ :",
              secondary: [
                "เที่ยวบินที่ดำเนินการโดยสายการบินไทยแอร์เอเชีย (FD) สายการบินไทยแอร์เอเชียเอ็กซ์ (XJ) และ สายการบินแอร์เอเชียอินเดีย (I5)",
                "เที่ยวบินที่เดินทางออกจากประเทศไทย",
                "เที่ยวบินที่เดินทางออกจากฮ่องกง"
              ]
            }
          ],
          extra:"หมายเหตุ : ผู้โดยสารที่มีเที่ยวบินออกจากประเทศฟิลิปปินส์และไม่ได้เดินทางสามารถขอคืนค่าภาษีสนามบิน (Passenger Service Charge) ได้ภายในหนึ่งปีนับจากวันที่ได้ทำการสำรองที่นั่ง โดยจะได้รับการยกเว้นค่าธรรมเนียมการขอคืนเงิน"
        }
      },
      {
        display: "จ่ายเงินซ้อน", value: "250",
        popup: {
          title:"การเรียกเก็บเงินซ้ำซ้อน",
          main:"การขอคืนค่าโดยสารอันเกิดจากการถูกเรียกเก็บเงินซ้ำซ้อนสามารถดำเนินการได้ หากพบว่ามีการเรียกเก็บเงินภายใต้หมายเลขการสำรองที่นั่งเดียวกันมากกว่าหนึ่งครั้ง (ตัวอย่างเช่น บัตรเครดิตมีการตัดยอดสองครั้ง) การคืนเงินในคำร้องที่ได้รับการอนุมัติ จะดำเนินการคืนเข้าช่องทางการจ่ายเงินที่ถูกเรียกเก็บภายหลัง",
          list:[],
          extra:""
        }
      },
      {
        display: "หมายเลขการสำรองที่นั่งซ้ำซ้อน", value: "249",
        popup: {
          title:"การสำรองที่นั่งซ้ำซ้อน",
          main:"หลักเกณฑ์การขอคืนค่าโดยสารในกรณีหมายเลขการสำรองที่นั่งซ้ำซ้อน :",
          list:[
            { main: "หมายเลขการสำรองที่นั่งทั้งสองจะต้องมีวันเดินทาง หมายเลขเที่ยวบิน รวมถึง เส้นทางบินทั้งไปและกลับเหมือนกัน", secondary: []},
            { main: "หมายเลขการสำรองที่นั่งทั้งสองจะต้องมีชื่อผู้โดยสาร และจำนวนผู้โดยสารเหมือนกัน", secondary: []},
            { main: "จะต้องยื่นคำร้องก่อนกำหนดการเดินทาง", secondary: []}
          ],
          extra:"หมายเหตุ : หมายเลขการสำรองที่นั่งที่ได้ทำการสำรองและได้รับการยืนยันในครั้งแรก จะเป็นหมายเลขการสำรองที่นั่งที่ใช้เดินทาง ผู้โดยสารสามารถยีนคำร้องขอคืนเงินในหมายเลขการสำรองที่นั่งครั้งหลังเท่านั้น การคืนเงินในคำร้องที่ได้รับการอนุมัติ จะดำเนินการคืนเข้าช่องทางการจ่ายเงินของหมายเลขการสำรองที่นั่งที่ทำการสำรองและได้รับการยืนยันภายหลัง"
        }
      },
      {
        display: "ปลอดภาษี", value: "109",
        popup: {
          title:"ปลอดภาษี",
          main:"สามารถขอเงินคืนสำหรับสินค้าปลอดภาษีในกรณีต่อไปนี้เท่านั้น:",
          list:[
            { main: "สินค้ามีตำหนิ", secondary: []},
            { main: "รับประกันราคาต่ำสุด (คุณพบสินค้าราคาถูกกว่า)", secondary: []},
            { main: "ยกเลิกเที่ยวบิน *", secondary: []},
            { main: "พลาดเที่ยวบิน *", secondary: []},
            { main: "ยกเลิกคำสั่งซื้อ *", secondary: []}
          ],
          extra:"* สำหรับสินค้าปลอดภาษีที่จองล่วงหน้าเท่านั้น"
        }
      },
      {
        display: "เที่ยวบินยกเลิก", value: "511",
        popup: {
          title:"เที่ยวบินยกเลิก",
          main:"การขอคืนเงินกรณีเที่ยวบินยกเลิก สามารถทำได้ในกรณีที่สายการบินเป็นผู้ทำการยกเลิกเที่ยวบินนั้น",
          list:[],
          extra:""
        }
      },
      {
        display: "เที่ยวบินเปลี่ยนเวลา", value: "513",
        popup: {
          title:"เที่ยวบินเปลี่ยนแปลงตารางเวลา",
          main:"การขอคืนเงินกรณีเที่ยวบินเปลี่ยนแปลงตารางเวลา สามารถทำได้หากมีการเปลี่ยนแปลงตารางเวลามากกว่า 3 ชั่วโมงจากตารางเวลาเดิม",
          list:[],
          extra:""
        }
      }
    ]
  }
}

const CASE_OPTIONS: Object = {
  "en-gb": [{display: "Compliment", value: "9"}, {display: "Enquiry", value: "1"}, {display: "Customer Request", value: "12"}, {display: "Complaints", value: "1"}, {display: "Refund", value: "8"}],
  "ko-kr": [{display: "칭찬", value: "9"}, {display: "문의", value: "1"}, {display: "고객 요청", value: "12"}, {display: "불편사항", value: "1"}, {display: "환불", value: "8"}],
  "ja-jp": [{display: "お褒めの言葉", value: "9"}, {display: "お問い合わせ", value: "1"}, {display: "ご要望", value: "12"}, {display: "クレーム・ご意見", value: "1"}, {display: "払い戻し", value: "8"}],
  "ms-my": [{display: "Pujian", value: "9"}, {display: "Pertanyaan", value: "1"}, {display: "Permintaan pelanggan", value: "12"}, {display: "Aduan", value: "1"}, {display: "Pemulangan bayaran", value: "8"}],
  "id-id": [{display: "Komplimen", value: "9"}, {display: "Pertanyaan", value: "1"}, {display: "Permintaan pelanggan", value: "12"}, {display: "Keluhan", value: "1"}, {display: "Refund", value: "8"}],
  "zh-cn": [{display: "表扬", value: "9"}, {display: "咨询", value: "1"}, {display: "乘客要求", value: "12"}, {display: "投诉", value: "1"}, {display: "退款", value: "8"}],
  "zh-hk": [{display: "致意", value: "9"}, {display: "詢問", value: "1"}, {display: "乘客要求", value: "12"}, {display: "投訴", value: "1"}, {display: "退款", value: "8"}],
  "th-th": [{display: "ชมเชย", value: "9"}, {display: "สอบถามข้อมูล", value: "1"}, {display: "การแจ้งขอจากลูกค้า", value: "12"}, {display: "ข้อร้องเรียน", value: "1"}, {display: "การคืนเงิน", value: "8"}]
}

const LABELS: Object = {
  "en-gb":{
    name: {main: "First and Last name", err: ["Please fill in first name", "Please fill in last name"]},
    email: {main: "Email Address", err: "Please fill in email"},
    mobilenum: {main: "Mobile phone number", err: "Mobile phone number should include international dialing code with only number from 0 to 9. ('space', '-', '+' and other non-decimal characters are not allowed)"},
    homenum: {main: "Home phone number", err: ""},
    casecategory: {main: "Case category", err: "Please select your case category"},
    typecategory: {main: "Type", err: "Please select your case type"},
    bookingnumber: {main: "Booking number", err: "Please fill in your booking number for refund verification"},
    flightnumber: {main: "Flight number", err: ["Please select airline code", "Please fill in flight number"]},
    flightdatetime: {main: "Flight date and time", err: ""},
    attachment: {main: "Attachment", err: ""},
    feedback: {main: "Feedback", err: "Please fill in feedback", extra: "Please indicate if you would like to request for a full refund (all sectors) or the affected sector only."},
    paymentmethod: {main: "Booking Payment", err: "", extra: "This refund will be made to the initial credit card account used during booking, thus the following fields can be disregarded."},
    bankcurrency: {main: "Bank Currency", err: "Please select bank currency"},
    bankname: {main: "Bank Name", err: { main: "Please fill in bank name", secondary: {cny: "Please fill in Bank name in simplified chinese", twd: "Please fill in Bank name in traditional chinese"}}},
    bankholdername: {main: "Bank Account Holder's Name", err: { main: "Please fill in only alphabets (a-z) for bank account holder's name", secondary: {cny: "Please fill in Bank Account Holder's Name in simplified chinese", twd: "Please fill in Bank Account Holder's Name in traditional chinese"}, wellnet: "Please fill in Bank Account Holder's Name in Japanese Characters", wellnetextra: "Please provide Account Holder's Name in half-width Katakana i.e ｽｽﾞｷﾀﾛｳ"}},
    bankaccountnumber: {main: "Bank Account Number", err: "Please fill in bank account number"},
    bankbranch: {main: "Bank Branch", err: { main: "Please fill in bank branch", secondary: {cny: "Please fill in Bank Branch in simplified chinese", twd: "Please fill in Bank Branch in traditional chinese"}}},
    province: {main: "Province", err: {main: "Please fill in Province", secondary: {cny: "Please fill in Province in simplified chinese", twd: "Please fill in Province in traditional chinese"}}},
    city: {main: "City", err: {main: "Please fill in City", secondary: {cny: "Please fill in City in simplified chinese", twd: "Please fill in City in traditional chinese"}}},
    wellnetbankcode: { main: "Bank Code", err: "Please fill in 4-digit Bank Code" },
    wellnetbranchcode: { main: "Branch Code", err: "Please fill in 3-digit Branch Code" },
    wellnetaccounttype: { main: "Account Type", err: "Please select Account Type" },
    bankroutecode: {main: "International Bank Code", err: "Please select routing code"},
    bankroutenumber: {main: "International Bank Number", err: "Please fill in routing code number"},
    button: {reset: "Clear", submit: "Submit"}
  },
  "ko-kr":{
    name: {main: "이름", err: ["성을 입력하세요", "성을 입력하세요"]},
    email: {main: "이메일 주소", err: "이메일 주소를 입력하세요"},
    mobilenum: {main: "휴대폰 번호", err: "휴대전화 번호에는 국제 전화코드가 포함되어야 하며 0~9의 숫자만을 입력해야 합니다. ('공백', '-', '+' 및 숫자가 아닌 문자는 허용되지 않습니다)"},
    homenum: {main: "집 전화 번호", err: ""},
    casecategory: {main: "사례 분류", err: "문의하실 항목을 선택해주시기 바랍니다"},
    typecategory: {main: "유형", err: "질문의 종류를 선택해주시기 바랍니다"},
    bookingnumber: {main: "예약 번호", err: ""},
    flightnumber: {main: "비행편 번호", err: ["항공사 코드를 선택하십시오", "항공편 번호를 입력하세요"]},
    flightdatetime: {main: "비행 일자 및 시간", err: ""},
    attachment: {main: "첨부파일", err: ""},
    feedback: {main: "피드백", err: "피드백을 입력하세요", extra: "귀하의 환불진행을 위하여 전 구간 또는 피해 받은 구간 중 선택하여주시기 바랍니다"},
    paymentmethod: {main: "결제수단", err: "", extra: "예약하실 때 최초로 결제하신 신용카드로 카드취소 되실 예정이므로 아래의 사항들은 작성하시지 마십시오"},
    bankcurrency: {main: "은행 통화", err: "은행 통화란을 작성해 주십시오"},
    bankname: {main: "은행명", err: { main: "은행 이름을 입력해 주세요", secondary:{cny: "은행 이름을 중국어(간체)로 입력해 주세요", twd: "은행 이름을 중국어(번체)로 입력해 주세요"}}},
    bankholdername: {main: "은행 계좌 소유자 이름", err: { main: "은행 예금주의 이름을 알파벳 (A-Z)으로 작성하십시오", secondary:{cny: "예금주를 중국어(간체)로 입력해 주세요", twd: "예금주를 중국어(번체)로 입력해 주세요"}, wellnet: "계좌 소유자 이름을 일본어로 입력해 주세요", wellnetextra: "일본어로 계좌 소유자 이름을 기재해 주세요(예: ｽｽﾞｷﾀﾛｳ"}},
    bankaccountnumber: {main: "은행 계좌번호", err: "계좌번호를 입력해 주세요"},
    bankbranch: {main: "은행 지점", err: { main: "지점 이름을 입력해 주세요", secondary:{cny: "지점 이름을 중국어(간체)로 입력해 주세요", twd: "지점 이름을 중국어(번체)로 입력해 주세요"}}},
    province: {main: "시/도", err: {main: "시/도를 입력해 주세요", secondary: {cny: "시/도를 중국어(간체)로 입력해 주세요", twd: "시/도를 중국어(번체)로 입력해 주세요"}}},
    city: {main: "시", err: {main: "시를 입력해 주세요", secondary: {cny: "시를 중국어(간체)로 입력해 주세요", twd: "시를 중국어(번체)로 입력해 주세요"}}},
    wellnetbankcode: { main: "은행 코드", err: "4자리 은행 코드를 입력해 주세요" },
    wellnetbranchcode: { main: "지점 코드", err: "3자리 지점 코드를 입력해 주세요" },
    wellnetaccounttype: { main: "계좌 종류", err: "계좌 종류를 선택해 주세요" },
    bankroutecode: {main: "국제은행코드", err: "은행식별코드(Routing Code)를 입력해 주세요"},
    bankroutenumber: {main: "국제은행번호", err: "은행식별코드(Routing Code)번호를 입력해 주세요"},
    button: {reset: "삭제", submit: "제출"}
  },
  "ja-jp":{
    name: {main: "氏名（ローマ字でご入力下さい）", err: ["お名前を入力してください", "名字を入力してください"]},
    email: {main: "Eメールアドレス", err: "Eメールアドレスを入力してください"},
    mobilenum: {main: "携帯電話番号", err: "携帯電話番号には国番号（0～9の数字のみ使用可）を付けてください（スペース、「-」、「+」や数字以外の文字は使用できません）"},
    homenum: {main: "自宅電話番号", err: ""},
    casecategory: {main: "問題の種類", err: "お問い合わせの項目をお選びください"},
    typecategory: {main: "種類", err: "＊お問い合わせの種類をお選びください"},
    bookingnumber: {main: "予約番号", err: ""},
    flightnumber: {main: "フライト番号", err: ["航空会社のコードを選択してください", "便名を入力してください"]},
    flightdatetime: {main: "フライト日時", err: ""},
    attachment: {main: "添付", err: ""},
    feedback: {main: "ご意見（日本語入力可", err: "ご意見を入力してください", extra: "往路・復路合わせての払い戻し、または影響の生じた路線のみの払い戻しをご希望の際は、こちらにご記入ください"},
    paymentmethod: {main: "予約時にご利用になられた支払い方法", err: "", extra: "この払い戻しは、予約時に使用された最初のクレジットカードに行われますので、以下の項目に入力する必要はありません"},
    bankcurrency: {main: "銀行通貨", err: "銀行の通貨をご記入ください"},
    bankname: {main: "銀行名", err: { main: "銀行名をご記入ください", secondary: {cny: "簡体中国語で銀行名をお書きください", twd: "繁体中国語で銀行名をお書きください"}}},
    bankholdername: {main: "口座名義人名", err: { main: "口座所有者を英字（a-z）のみで記入してください", secondary: {cny: "簡体中国語で銀行口座所有者名をお書きください", twd: "繁体中国語で銀行口座所有者名をお書きください"}, wellnet: "口座名義人を日本語半角カタカナでご記入ください", wellnetextra: "口座名義人を日本語半角カタカナでご記入ください。例： ｽｽﾞｷﾀﾛｳ"}},
    bankaccountnumber: {main: "銀行の口座番号", err: "銀行口座番号をご記入ください"},
    bankbranch: {main: "銀行の支店", err: { main: "銀行支店名をご記入ください", secondary: {cny: "支店名を簡体中国語でご記入ください", twd: "支店名をお書きください"}}},
    province: {main: "都道府県", err: {main: "省・州・都道府県名をお書きください", secondary: {cny: "簡体中国語で省・州・都道府県名をお書きください", twd: "繁体中国語で省・州・都道府県名をお書きください"}}},
    city: {main: "市町村", err: {main: "市町村名をお書きください", secondary: {cny: "簡体中国語で市町村名をお書きください", twd: "繁体中国語で市町村名をお書きください"}}},
    wellnetbankcode: { main: "銀行コード", err: "4桁の銀行コードを記入してください" },
    wellnetbranchcode: { main: "支店コード", err: "3桁の支店コードを記入してください" },
    wellnetaccounttype: { main: "口座種別", err: "口座種別を選択してください" },
    bankroutecode: {main: "金融機関識別コード種別", err: "ルーティングコードをご記入ください"},
    bankroutenumber: {main: "金融機関識別コード", err: "ルーティングコード番号をご記入ください"},
    button: {reset: "クリア", submit: "送信"}
  },
  "ms-my":{
    name: {main: "Nama Pertama dan Keluarga", err: ["Sila isikan Nama Pertama","Sila isikan Nama Keluarga"]},
    email: {main: "Alamat E-mel", err: "Sila isikan Alamat E-mel"},
    mobilenum: {main: "Nombor telefon bimbit", err: "Nombor telefon bimbit hendaklah merangkumi kod panggilan antarabangsa dengan nombor sahaja daripada 0 hingga 9. ('jarak', '-', '+' aksara bukan nombor yang lain tidak dibenarkan)"},
    homenum: {main: "Nombor telefon rumah", err: ""},
    casecategory: {main: "Kategori kes", err: ""},
    typecategory: {main: "Jenis", err: "Sila pilih jenis kes anda"},
    bookingnumber: {main: "Nombor tempahan", err: "Sila isikan Nombor Tempahan anda untuk pengesahan bayaran balik"},
    flightnumber: {main: "Nombor penerbangan", err: ["Sila pilih Kod Penerbangan", "Sila isikan Nombor Penerbangan"]},
    flightdatetime: {main: "Tarikh dan masa penerbangan", err: ""},
    attachment: {main: "Lampiran", err: ""},
    feedback: {main: "Maklum balas", err: "Sila isikan Maklum Balas", extra: "Sila nyatakan jika anda ingin untuk meminta bayaran balik sepenuhnya (semua sektor) atau sektor yang terjejas sahaja"},
    paymentmethod: {main: "Pembayaran tempahan", err: "", extra: "Bayaran ini akan dipulangkan ke akaun kad kredit asal yang digunakan semasa tempahan, jadi ruangan berikut boleh diabaikan"},
    bankcurrency: {main: "Mata Wang Bank", err: "Sila masukkan nilai mata wang bank"},
    bankname: {main: "Nama bank", err: { main: "Sila isikan Nama bank", secondary: {cny: "Sila isikan nama Bank dalam Bahasa Cina ringkas", twd: "Sila isikan nama Bank dalam Bahasa Cina tradisional"}}},
    bankholdername: {main: "Nama Pemegang Akaun Bank", err: { main: "Sila isikan Nama Pemegang Akaun Bank dalam abjad (a-z) sahaja", secondary: {cny: "Sila isikan Nama Pemegang Akaun Bank dalam Bahasa Cina ringkas", twd: "Sila isikan Nama Pemegang Akaun Bank dalam Bahasa Cina tradisional"}, wellnet: "Sila isikan Nama Pemegang Akaun Bank dalam Aksara Bahasa Jepun", wellnetextra: "Sila isikan Nama Pemegang Akaun dalam Aksara Bahasa Jepun contoh: ｽｽﾞｷﾀﾛｳ"}},
    bankaccountnumber: {main: "Nombor Akaun Bank", err: "Sila isikan Nombor Akaun Bank"},
    bankbranch: {main: "Cawangan Bank", err: { main: "Sila isikan Cawangan Bank", secondary: {cny: "Sila isikan Cawangan Bank dalam Bahasa Cina ringkas", twd: "Sila isikan Cawangan Bank dalam Bahasa Cina tradisional"}}},
    province: {main: "Negeri/Wilayah", err: {main: "Sila isikan Negeri/ Wilayah", secondary: {cny: "Sila isikan Negeri/Wilayah dalam Bahasa Cina ringkas", twd: "Sila isikan Bandar dalam Bahasa Cina tradisional"}}},
    city: {main: "Bandar", err: {main: "Sila isikan Bandar", secondary: {cny: "Sila isikan Bandar dalam Bahasa Cina ringkas", twd: "Sila isikan Bandar dalam Bahasa Cina tradisional"}}},
    wellnetbankcode: { main: "Kod Bank", err: "Sila isikan 4 digit Kod Bank" },
    wellnetbranchcode: { main: "Kod Cawangan", err: "Sila isikan 3 digit Kod Cawangan" },
    wellnetaccounttype: { main: "Jenis Akaun", err: "Sila pilih Jenis Akaun" },
    bankroutecode: {main: "Kod Perbankan Antarabangsa", err: "Sila isikan Kod Penghalaan"},
    bankroutenumber: {main: "Nombor Perbankan Antarabangsa", err: "Sila isikan Nombor Kod Penghalaan"},
    button: {reset: "Padam", submit: "Hantar"}
  },
  "id-id":{
    name: {main: "Nama depan dan nama belakang", err: ["Tulis Nama Depan","Tulis Nama Belakang"]},
    email: {main: "Alamat Email", err: "Tulis Alamat email"},
    mobilenum: {main: "Nomor telepon selular", err: "Nomor ponsel harus menyertakan kode panggilan internasional hanya dengan angka 0 sampai 9. ('spasi', '-', '+' dan karakter non-desimal lainnya tidak diperbolehkan)"},
    homenum: {main: "Nomor telepon rumah", err: ""},
    casecategory: {main: "Kategori Kasus", err: ""},
    typecategory: {main: "Jenis", err: "Silahkan pilih tipe kasus anda"},
    bookingnumber: {main: "Nomor Pembelian", err: "Masukkan Nomor Booking untuk verifikasi refund"},
    flightnumber: {main: "Nomor Penerbangan", err: ["Pilih Kode Maskapai","Masukkan Nomor Penerbangan"]},
    flightdatetime: {main: "Tanggal dan waktu penerbangan", err: ""},
    attachment: {main: "Lampiran", err: ""},
    feedback: {main: "Saran & Masukan", err: "Tulis Masukan", extra: "Mohon informasikan kepada kami untuk sektor penerbangan yang hendak dibatalkan dan diproses refund (semua sektor atau hanya sektor yang terkena dampak perubahan/pembatalan)"},
    paymentmethod: {main: "Pembayaran Pembelian", err: "", extra: "Pengembalian uang akan dikirimkan ke rekening kartu kredit yang Anda gunakan saat melakukan pemesanan, untuk itu kolom berikut dapat dikosongkan"},
    bankcurrency: {main: "Mata Uang Bank", err: "Harap isi dalam Mata Uang Bank"},
    bankname: {main: "Nama Bank Anda", err: { main: "Isilah nama Bank Anda", secondary: {cny: "Tulis nama Bank dalam bahasa China sederhana", twd: "Tulis nama Bank dalam bahasa China tradisional"}}},
    bankholdername: {main: "Nama Pemegang Rekening Bank Anda", err: { main: "Mohon untuk hanya mengisi abjad (a-z) untuk Nama Pemegang Rekening Bank", secondary: {cny: "Tulis Nama Pemegang Rekening Bank dalam bahasa China Sederhana", twd: "Tulis Nama Pemegang Rekening Bank dalam bahasa China Tradisional"}, wellnet: "Silahkan Masukan Nama Pemegang Rekening Bank dalam huruf Jepang", wellnetextra: "Silahkan Sertakan nama Pemegang Akun dalam huruf Jepang: ｽｽﾞｷﾀﾛｳ"}},
    bankaccountnumber: {main: "Nomor Rekening Bank Anda", err: "Isilah Nomor Rekening Bank Anda"},
    bankbranch: {main: "Nama Cabang Bank Anda", err: { main: "Isilah Nama Cabang Bank Anda", secondary: {cny: "Tulis Cabang Bank dalam bahasa China Sederhana", twd: "Tulis Cabang Bank dalam bahasa China Tradisional"}}},
    province: {main: "Provinsi", err: {main: "Tulis Provinsi", secondary: {cny: "Tulis Provinsi dalam bahasa China sederhana", twd: "Tulis Provinsi dalam bahasa China tradisional"}}},
    city: {main: "Kota", err: {main: "Tulis Kota", secondary: {cny: "Tulis Kota dalam bahasa China sederhana", twd: "Tulis Kota dalam bahasa China tradisional"}}},
    wellnetbankcode: { main: "Kode Bank", err: "Silahkan Masukan 4 angka Kode Bank" },
    wellnetbranchcode: { main: "Kode Cabang", err: "Silahkan Masukan 3 angka Kode Cabang" },
    wellnetaccounttype: { main: "Jenis Rekening", err: "Silahkan Pilih jenis Rekening" },
    bankroutecode: {main: "Kode Bank Internasional", err: "Isilah Kode Routing"},
    bankroutenumber: {main: "Nomor Bank Internasional", err: "Isilah Nomor Kode Routing"},
    button: {reset: "Kosongkan", submit: "Masukkan"}
  },
  "zh-cn":{
    name: {main: "英文名和姓", err: ["请填写名","请填写姓"]},
    email: {main: "电子邮件地址", err: "请填写电子邮箱地址"},
    mobilenum: {main: "手机号码", err: "移动电话号码必须包含国家号码，并且只能含有 0-9 的数字。（不允许包含空格、 0-、 0+，以及其他非十进制数字。）"},
    homenum: {main: "住家电话号码", err: ""},
    casecategory: {main: "个案类别", err: ""},
    typecategory: {main: "类型", err: "请选择案件类型"},
    bookingnumber: {main: "订购编号", err: "请输入您的预订编号进行退款验证"},
    flightnumber: {main: "航班编号", err: ["请选择航空公司代码", "请填写航班号"]},
    flightdatetime: {main: "航班日期和时间", err: ""},
    attachment: {main: "附件", err: ""},
    feedback: {main: "回馈", err: "请填写反馈", extra: "请指出您的退款要求:- 1、 全额退款 2、 只受影响航班"},
    paymentmethod: {main: "预订付款", err: "", extra: "退款将返还到您在预订时使用的信用卡帐户，因此一下栏目可以不填"},
    bankcurrency: {main: "银行货币", err: "请填入银行币种"},
    bankname: {main: "银行名称", err: { main: "请填上银行名称", secondary: {cny: "请用简体中文填写银行名称", twd: "请用繁体中文填写银行名称"}}},
    bankholdername: {main: "银行帐户开户人姓名", err: { main: "请以罗马字母(a-z)填写银行账户持有人姓名", secondary: {cny: "请用简体中文填写银行账户姓名", twd: "请用繁体中文填写银行账户姓名"}, wellnet: "请以一字节片假名填写银行账户持有人姓名", wellnetextra: "请以一字节片假名填写帐户持有人姓名。例： ｽｽﾞｷﾀﾛｳ"}},
    bankaccountnumber: {main: "银行账号", err: "请填上银行账号"},
    bankbranch: {main: "支行", err: { main: "请填上银行分行", secondary: {cny: "请用简体中文填写支行名称", twd: "请用繁体中文填写支行名称"}}},
    province: {main: "省份", err: {main: "请填写省份", secondary: {cny: "请用简体中文填写省份", twd: "请用繁体中文填写省份"}}},
    city: {main: "城市", err: {main: "请填写城市", secondary: {cny: "请用简体中文填写城市", twd: "请用繁体中文填写城市"}}},
    wellnetbankcode: { main: "银行代码", err: "请填写4位数的银行代码" },
    wellnetbranchcode: { main: "分行代码", err: "请填写3位数的分行代码" },
    wellnetaccounttype: { main: "帐户类型", err: "请选择帐户类型" },
    bankroutecode: {main: "银行国际汇款路径", err: "请填上路径代码"},
    bankroutenumber: {main: "开户银行国际汇款代码", err: "请填上路径代码号码"},
    button: {reset: "清除", submit: "呈交"}
  },
  "zh-hk":{
    name: {main: "名字和姓氏", err: ["請填寫名字", "請填寫姓氏"]},
    email: {main: "電郵地址", err: "請填寫電郵地址"},
    mobilenum: {main: "手機電話", err: "流動電話需包括國際致電碼，其中僅可為0至9的數字。(不可輸入'空格'、 '-'、'+'和其他符號)"},
    homenum: {main: "家居電話", err: ""},
    casecategory: {main: "個案類別", err: ""},
    typecategory: {main: "種類", err: "請選擇案件類型"},
    bookingnumber: {main: "訂購編號", err: "請為退款認證程序填寫你的訂票編號"},
    flightnumber: {main: "航班編號", err: ["請選擇航空公司代號", "請填寫航班號碼"]},
    flightdatetime: {main: "航班日期和時間", err: ""},
    attachment: {main: "附件", err: ""},
    feedback: {main: "回饋", err: "請填寫意見", extra: "請指出您的退款要求:- 1、 全額退款 2、 只受影響航班"},
    paymentmethod: {main: "訂位付款", err: "", extra: "這款項將退回至最初訂位時所使用的信用卡賬戶內，因此以下的空格可以不需填寫"},
    bankcurrency: {main: "銀行貨幣", err: "請輸入銀行貨幣"},
    bankname: {main: "銀行名稱", err: { main: "請輸入銀行名稱", secondary: {cny: "請以簡體中文填寫銀行名稱", twd: "請以繁體中文填寫銀行名稱"}}},
    bankholdername: {main: "銀行帳戶持有人姓名", err: { main: "請在銀行賬戶持有人欄輸入英文字母 （a-z）", secondary: {cny: "請以簡體中文填寫銀行帳戶持有人名稱", twd: "請以繁體中文填寫銀行帳戶持有人名稱"}, wellnet: "請以一字节片假名填寫銀行賬戶持有人姓名", wellnetextra: "請以一字节片假名填寫帳戶持有人姓名。例: ｽｽﾞｷﾀﾛｳ"}},
    bankaccountnumber: {main: "銀行帳戶號碼", err: "請輸入銀行戶口號碼"},
    bankbranch: {main: "銀行分行", err: { main: "請輸入銀行分行", secondary: {cny: "請以簡體中文填寫省份", twd: "請以繁體中文填寫銀行分行"}}},
    province: {main: "省份", err: {main: "請填寫省份", secondary: {cny: "請以簡體中文填寫省份", twd: "請以繁體中文填寫省份"}}},
    city: {main: "城市", err: {main: "請填寫城市", secondary: {cny: "請以簡體中文填寫城市", twd: "請以繁體中文填寫城市"}}},
    wellnetbankcode: { main: "銀行代碼", err: "請輸入4 位數銀行代碼" },
    wellnetbranchcode: { main: "分行代碼", err: "請輸入3 位數分行代碼" },
    wellnetaccounttype: { main: "帳戶類型", err: "請選擇賬戶類型" },
    bankroutecode: {main: "銀行國際匯款路徑", err: "請輸入匯款路線(Routing Code)"},
    bankroutenumber: {main: "開戶銀行國際匯款代碼", err: "請輸入匯款路線號碼(Routing Code Number)"},
    button: {reset: "清除", submit: "提交"}
  },
  "th-th":{
    name: {main: "ชื่อและนามสกุล", err: ["กรุณากรอกชื่อ","กรุณากรอกนามสกุล"]},
    email: {main: "อีเมลแอดเดรส", err: "กรุณากรอกอีเมลแอดเดรส"},
    mobilenum: {main: "เบอร์โทรศัพท์มือถือ", err: "เบอร์โทรศัพท์มือถือจะต้องมีรหัสโทรระหว่างประเทศเป็นตัวเลข 0 ถึง 9 เท่านั้น (ไม่อนุญาตให้ใช้ 'เคาะว่าง', '-', '+' หรืออักขระอื่นที่ไม่ใช่ตัวเลข)"},
    homenum: {main: "เบอร์โทรศัพท์บ้าน", err: ""},
    casecategory: {main: "หมวดหมู่", err: ""},
    typecategory: {main: "ประเภท", err: "โปรดเลือกรายละเอียดหัวข้อ"},
    bookingnumber: {main: "หมายเลขจอง", err: "กรุณากรอกหมายเลขรายการจองของคุณเพื่อยืนยันการคืนเงิน"},
    flightnumber: {main: "หมายเลขเที่ยวบิน", err: ["กรุณาเลือกรหัสเที่ยวบิน", "กรุณากรอกเลขเที่ยวบิน"]},
    flightdatetime: {main: "วันที่และเวลาเดินทาง", err: ""},
    attachment: {main: "ไฟล์แนบ", err: ""},
    feedback: {main: "ความเห็น", err: "กรุณากรอกความเห็น", extra: "กรุณาระบุ ขอคืนเงินทั้งหมด (ทุกเที่ยวบินในหมายเลขการสำรองที่นั่ง) หรือ ระบุเฉพาะเที่ยวบินที่ได้รับผลกระทบ"},
    paymentmethod: {main: "ชำระเงินผ่าน", err: "", extra: "การคืนเงินนี้เป็นการคืนเงินสำหรับบัญชีบัตรเครดิตแรกที่ใช้ระหว่างทำรายการจอง สามารถละเว้นฟิลด์ต่อไปนี้ได้"},
    bankcurrency: {main: "สกุลเงิน", err: "กรุณาระบุสกุลเงิน"},
    bankname: {main: "ชื่อธนาคาร", err: { main: "โปรดกรอกชื่อธนาคาร", secondary: { cny: "โปรดระบุชื่อธนาคารเป็นอักษรจีนแบบย่อ", twd: "โปรดระบุชื่อธนาคารเป็นอักษรจีนตัวเต็ม"}}},
    bankholdername: {main: "ชื่อเจ้าของบัญชีธนาคาร", err: { main: "กรุณากรอกชื่อเจ้าของบัญชีธนาคารด้วยอักษรภาษาอังกฤษเท่านั้น", secondary: { cny: "โปรดระบุชื่อเจ้าของบัญชีธนาคารเป็นอักษรจีนแบบย่อ", twd: "โปรดระบุชื่อเจ้าของบัญชีธนาคารเป็นอักษรจีนตัวเต็ม"}, wellnet: "กรุณาระบุชื่อเจ้าของบัญชีด้วยตัวอักษรภาษาญี่ปุ่น", wellnetextra: "กรุณาระบุชื่อเจ้าของบัญชีด้วยตัวอักษรภาษาญี่ปุ่น เช่น ｽｽﾞｷﾀﾛｳ"}},
    bankaccountnumber: {main: "หมายเลขบัญชีธนาคาร", err: "โปรดกรอกหมายเลขบัญชีธนาคาร"},
    bankbranch: {main: "สาขา", err: { main: "โปรดกรอกสาขาธนาคาร", secondary: { cny: "โปรดระบุสาขาธนาคารเป็นอักษรจีนแบบย่อ", twd: "โปรดระบุสาขาธนาคารเป็นอักษรจีนตัวเต็ม"}}},
    province: {main: "จังหวัด", err: {main: "โปรดระบุจังหวัด", secondary: {cny: "โปรดระบุจังหวัดเป็นอักษรจีนแบบย่อ", twd: "โปรดระบุจังหวัดเป็นอักษรจีนตัวเต็ม"}}},
    city: {main: "อำเภอ/ เขต​", err: {main: "โปรดระบุอำเภอ/เขต", secondary: {cny: "โปรดระบุอำเภอ/เขตเป็นอักษรจีนแบบย่อ", twd: "โปรดระบุอำเภอ/เขตเป็นอักษรจีนตัวเต็ม"}}},
    wellnetbankcode: { main: "รหัสธนาคาร", err: "กรุณากรอกเลขรหัสธนาคาร 4 หลัก" },
    wellnetbranchcode: { main: "รหัสสาขา", err: "กรุณากรอกเลขรหัสสาขาธนาคาร 3 หลัก" },
    wellnetaccounttype: { main: "ประเภทบัญชี", err: "กรุณาเลือกประเภทบัญชี" },
    bankroutecode: {main: "International Bank Code", err: "โปรดกรอกรหัสการโอน"},
    bankroutenumber: {main: "International Bank Number", err: "โปรดกรอกหมายเลขรหัสการโอน"},
    button: {reset: "เคลียร์ข้อมูล", submit: "ส่ง"}
  },
}

const CURRENCIES = [ 'AED - UAE Dirham', 'AFN - Afghanistan Afghani', 'ALL - Albania Lek', 'AMD - Armenia Dram', 'ANG - Netherlands Antilles Guilder','AOA - Angola Kwanza','ARS - Argentina Peso','AUD - Australian Dollar','AWG - Aruban Florin','AZN - Azerbaijani Manat','BAM - Bosnian Convertible Mark','BBD - Barbados Dollar','BDT - Bangladesh Taka','BGN - Bulgaria Lev','BHD - Bahraini Dinar','BIF - Burundi Franc','BMD - Bermudian Dollar','BND - Brunei Dollar','BOB - Bolivian Boliviano','BRL - Brazilian Real', 'BSD - Bahamian Dollar', 'BTN - Bhutan Ngultrum', 'BWP - Botswana Pula', 'BYR - Belarussian Rouble', 'BZD - Belize Dollar', 'CAD - Canadian Dollar', 'CDF - Congo Dem. Rep. Franc', 'CHF - Swiss Franc', 'CLP - Chilean Peso', 'CNY - Chinese Renminbi Yuan', 'COP - Colombian Peso', 'COU - Unidad de Valor Real', 'CRC - Costa Rican Colón', 'CUC - Cuban convertible peso', 'CUP - Cuban Peso', 'CVE - Escudo Caboverdiano', 'CZK - Czech Koruna', 'DJF - Djibouti Franc', 'DKK - Danish Krone', 'DOP - Dominican Republic Peso', 'DZD - Algerian Dinar', 'EEK - Estonia Kroon', 'EGP - Egytian Pound', 'ERN - Eritrea Nakfa', 'ETB - Ethiopia Birr', 'EUR - Euro', 'FJD - Fiji Dollar', 'FKP - Falkland Pound', 'GBP - Sterling', 'GEL - Georgia Lari', 'GHS - Ghana Cedi', 'GIP - Gibraltar Pound', 'GMD - Gambia Dalasi', 'GNF - Guinea Franc', 'GTQ - Guatemala Quetzal', 'GYD - Guyana Dollar', 'HKD - Hong Kong Dollar', 'HNL - Honduras Lempira', 'HRK - Croatia Kuna', 'HTG - Haiti Gourde', 'HUF - Hungary Forint', 'IDR - Indonesia Rupiah', 'ILS - Israel Shekel', 'INR - Indian Rupee', 'IQD - Iraqi Dinar', 'IRR - Iranian Riyal', 'ISK - Icelandic Króna', 'JMD - Jamaican Dollar', 'JOD - Jordanian Dinar', 'JPY - Japanese Yen', 'KES - Kenyan Shilling', 'KGS - Kyrgyzstan Som', 'KHR - Cambodia Riel', 'KMF - Comorian Franc', 'KPW - North Korean Won', 'KRW - South Korean Won', 'KWD - Kuwaiti Dinar', 'KYD - Cayman Islands Dollar', 'KZT - Kazakhstan Tenge', 'LAK - Laos Kip', 'LBP - Lebanese Pound', 'LKR - Sri Lankan Rupee', 'LRD - Liberian Dollar', 'LSL - Lesotho Maloti', 'LTL - Lithuania Litas', 'LVL - Latvia Lat', 'LYD - Libyan Dinar', 'MAD - Moroccan Dirham', 'MDL - Moldovian Leu', 'MGA - Malagasy ariary', 'MKD - Macedonian Denar', 'MMK - Myanmar Kyat', 'MNT - Mongolia Tugrik', 'MOP - Macao Pataca', 'MRO - Mauritania Ouguiya', 'MUR - Mauritius Rupee', 'MVR - Maldives Rufiyaa', 'MWK - Malawian Kwacha', 'MXN - Mexican Peso', 'MYR - Malaysian Ringgit', 'MZN - Mozambique Metical', 'NAD - Namibian Dollar', 'NGN - Nigeria Naira', 'NIO - Nicaragua Córdoba', 'NOK - Norwegian Krone', 'NPR - Nepalese Rupee', 'NZD - New Zealand Dollar', 'OMR - Riyal Omani', 'PAB - Panama Balboa', 'PEN - Peru New Sol', 'PGK - Papua New Guinea Kina', 'PHP - Philippine Peso', 'PKR - Pakistani Rupee', 'PLN - Poland New Zloty', 'PYG - Paraguay Guarani', 'QAR - Qatari Riyal', 'RON - Romanian new leu', 'RSD - Serbian dinar', 'RUB - Russian Ruble', 'RWF - Rwanda Franc', 'SAR - Saudi Riyal', 'SBD - Solomon Islands Dollar', 'SCR - Seychelles Rupee', 'SDG - Sudanese pound', 'SEK - Swedish Krona', 'SGD - Singapore Dollar', 'SHP - St Helena Pound', 'SLL - Sierra Leone Leone', 'SOS - Somali Shilling', 'STD - São Tomé & Príncipe Dobra', 'SYP - Syrian Pound', 'SZL - Swaziland Lilangeni', 'THB - Thailand Baht', 'TJS - Tajikistan Somoni', 'TMT - Turkmenistan Manat', 'TND - Tunisia Tunisian Dinar', 'TOP - Tongan Pa\'anga', 'TRY - Turkish Lira', 'TTD - Trinidad & Tobago Dollar', 'TWD - Taiwanese NT Dollar', 'TZS - Tanzanian Shilling', 'UAH - Ukraine Hryvna', 'UGX - Ugandian Shilling', 'USD - US Dollar', 'UYU - Uruguayan Peso', 'UZS - Uzbekistani Sum', 'VEF - Venezuelan bolívar fuerte', 'VND - Vietnam Dong', 'VUV - Vanuatu Vatu', 'WST - Western Samoa Tala', 'XAF - Franc de la Communaut financi', 'XCD - East Caribbean Dollar', 'XPF - CFP Franc', 'XXX - No currency', 'YER - Yemen Riyal', 'ZAR - South African Rand', 'ZMK - Zambian Kwacha', 'ZWL - Zimbabwe Dolla', 'SDR - SDR Currency' ]

const PAYMENY_METHODS: Object = {
  "en-gb": [ {value:"1", display:"Credit Card"}, {value:"3", display:"Cash"}, {value:"2", display:"Bank/Direct Debit"}, {value:"5", display:"Wellnet"} ],
  "ko-kr": [ {value:"1", display:"신용카드"}, {value:"3", display:"현금"}, {value:"2", display:"은행/자동이체"}, {value:"5", display:"Wellnet"} ],
  "ja-jp": [ {value:"1", display:"クレジットカード"}, {value:"3", display:"現金"}, {value:"2", display:"銀行／口座引き落とし"}, {value:"5", display:"Wellnet"} ],
  "ms-my": [ {value:"1", display:"Kad Kredit"}, {value:"3", display:"Tunai"}, {value:"2", display:"Bank/Debit Terus"}, {value:"5", display:"Wellnet"} ],
  "id-id": [ {value:"1", display:"Kartu Kredit"}, {value:"3", display:"Tunai"}, {value:"2", display:"Bank/Internet Banking"}, {value:"5", display:"Wellnet"} ],
  "zh-cn": [ {value:"1", display:"信用卡"}, {value:"3", display:"现金"}, {value:"2", display:"银行转帐/直接转帐"}, {value:"5", display:"Wellnet"} ],
  "zh-hk": [ {value:"1", display:"信用卡"}, {value:"3", display:"現金"}, {value:"2", display:"銀行轉帳/以借記卡直接付款"}, {value:"5", display:"Wellnet"} ],
  "th-th": [ {value:"1", display:"บัตรเครดิต"}, {value:"3", display:"เงินสด"}, {value:"2", display:"ธนาคาร/ตัดผ่านบัญชี"}, {value:"5", display:"Wellnet"} ]
}

const ACKNOWLEDGEMENT_MESSAGE: Object = {
  "en-gb": {message: "*All refunds are subjected to AirAsia's approval. Please ensure that the bank details provided belongs to the passenger or the contact person who initially made the booking.", check: "I hereby agree that the details provided above are correct and the refund can be processed to the account number listed"},
  "ko-kr": {message: "*모든 환불은 에어 아시아의 승인을 조건으로 진행 됩니다. 제공된 은행 계좌 정보는 승객 또는 최초 예약자의 것인지 확인해주시기 바랍니다", check: "본인은 모든 상세정보를 위와 같이 올바르게 제공하였으며, 환불은 명시 되어있는 계좌번호로 진행되는것에 동의합니다"},
  "ja-jp": {message: "*エアアジアにて承認済の返金対象便に限ります。お送りいただく銀行口座などの情報はご搭乗者様本人、またはご予約者様のものに限ります", check: "上に記した情報に間違いありません。 クレジットカードへの返金処理の場合を除き、払い戻しはこちらの銀行口座に対して行なわれます"},
  "ms-my": {message: "*Semua bayaran balik adalah tertakluk kepada kelulusan AirAsia. Sila pastikan bahawa butir butir bank yang diberikan adalah milik penumpang atau pihak yang membuat tempahan", check: "Saya dengan ini bersetuju bahawa butir-butir yang diberikan di atas adalah betul dan bayaran balik boleh diproses kepada nombor akaun yang disenaraikan"},
  "id-id": {message: "*Semua pengembalian biaya/dana akan berdasarkan persetujuan AirAsia. Mohon dipastikan bahwa informasi rekening bank yang diberikan adalah milik tamu yang bersangkutan atau tamu yang melakukan pembayaran atas pemesanan penerbangan", check: "Saya setuju bahwa rincian yang diberikan di atas adalah benar dan pengembalian dana dapat diproses ke nomor rekening yang tercantum"},
  "zh-cn": {message: "*所有退款都是由亚航授权下进行的。请确保该项银行信息是由原作出预订的客户所提供的", check: "本人同意以上所提供的银行信息是正确的而该项退款可以退还至本人所提供的帐户号码"},
  "zh-hk": {message: "*所有退款都是由亞航授權下進行的。請確保該項銀行信息是由原作出預訂的客戶所提供的", check: "本人同意以上所提供的銀行信息是正確的而該項退款可以退還至本人所提供的帳戶號碼"},
  "th-th": {message: "*การคืนเงินขึ้นอยู่กับดุลพินิจของสายการบินแอร์เอเชีย โปรดตรวจสอบหมายเลขบัญชีธนาคารต้องเป็นของผู้โดยสารที่มีชื่ออยู่ในหมายเลขการสำรองที่นั่ง หรือผู้ที่ดำเนินการสำรองที่นั่งเท่านั้น", check: "ข้าพเจ้ายอมรับว่าข้อมูลที่ให้ไว้ถูกต้อง และยินยอมให้สายการบินแอร์เอเชียดำเนินการคืนเงินเข้าหมายเลขบัญชีธนาคารที่ได้ระบุไว้"}
}

const WELLNET_ACCOUNT_TYPE: Object = {
  "en-gb": [{value: "1", display: "Saving"}, {value: "2", display: "Checking"}],
  "ko-kr": [{value: "1", display: "예금 계좌번호"}, {value: "2", display: "당좌 계좌번호"}],
  "ja-jp": [{value: "1", display: "普通預金"}, {value: "2", display: "当座預金"}],
  "ms-my": [{value: "1", display: "Simpanan"}, {value: "2", display: "Semasa"}],
  "id-id": [{value: "1", display: "Tabungan"}, {value: "2", display: "Memeriksa"}],
  "zh-cn": [{value: "1", display: "储蓄账户"}, {value: "2", display: "支票账户"}],
  "zh-hk": [{value: "1", display: "儲存户口"}, {value: "2", display: "支票帳戶"}],
  "th-th": [{value: "1", display: "บัญชีออมทรัพย์"}, {value: "2", display: "บัญชีรองรับการจ่ายเช็คหรือบัตรเดบิต"}],
}

const ROUTING_CODES: string[] = ['SWIFT', 'BIC Code', 'ABA', 'Routing No', 'Sort Code','BSB', 'IBAN', 'IFSC']

@Injectable()
export class FormService {
  getLabels(language:string){
    return LABELS[language];
  }
  getCaseOptions(language:string){
    return CASE_OPTIONS[language];
  }
  getTypeOptions(language:string, option:string){
    return TYPE_OPTIONS[language][option];
  }
  getDialCodes(){
    return COUNTRY_DIAL_CODE;
  }
  getFlightOptions(){
    return FLIGHT_CODE_OPTIONS;
  }
  getPaymentMethods(language:string){
    return PAYMENY_METHODS[language];
  }
  getAcknowledgementMessage(language:string){
    return ACKNOWLEDGEMENT_MESSAGE[language];
  }
  getCurrencies(){
    return CURRENCIES;
  }
  getWellnetOptions(language:string){
    return WELLNET_ACCOUNT_TYPE[language];
  }
  getRoutingCodes(){
    return ROUTING_CODES;
  }
}

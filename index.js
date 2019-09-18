const express = require('express');
const line = require('@line/bot-sdk');

require('dotenv').config();

const app = express();

const config = {
    channelAccessToken: 'QUMKhSz/bM6Mu4qMI1q7cLthoH8+cBRz3glKwzGD+IAIx5GMM7+3Iqv/OsoPUWGBn3xyx4a90NbOzblA5nWFrK7ipGOVf6Qx0QPEJ3AbUWGc+10KFC65thmK6E6PVW+46kNThNTM59bJXZk+9jUw3AdB04t89/1O/w1cDnyilFU=',
    channelSecret: '2067a532dd9d29e76195133001045c0b'
};

const client = new line.Client(config);

app.post('/webhook', line.middleware(config), (req, res) => {
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => res.json(result));
});

function handleEvent(event) {

    console.log(event);
    if (event.type === 'message' && event.message.type === 'text') {
        handleMessageEvent(event);
    } else {
        return Promise.resolve(null);
    }
}

function handleMessageEvent(event) {
    var msg = {
        type: 'text',
        text: 'ลืม password เข้าระบบทะเบียนควรทำอย่างไร,ชำระค่าลงทะเบียนล่าช้าได้อย่างไร,ขั้นตอนการถอนรายวิชาติดw,ขั้นตอนการเพิ่มถอนรายวิชา,ขั้นตอนการยื่นคำร้องขอแก้ระดับคะแนนไม่สมบูรณ์ ม.ส.(i),ขอพักการศึกษา,คืนสภาพนักศึกษา,ขอเอกสารการศึกษา,ขอสำเร็จการศึกษา,ขึ้นทะเบียนบัณฑิต,ติดต่อขอรับเอกสารการศึกษาใช้เวลากี่วัน,นักศึกษาสามารถประเมินความพึงพอใจได้ที่ไหน,ลงทะเบียน,เพิ่ม-ถอนรายวิชา วันไหน,ขอแบบฟอร์มทำบัตรนักศึกษาใหม่'
    };

    var eventText = event.message.text.toLowerCase();

    if (eventText === 'ลืม password เข้าระบบทะเบียนควรทำอย่างไร') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถ reset passwort ได้ผ่าน https://qro.page.link/AQTZA'
        }
    }else if (eventText === 'ชำระค่าลงทะเบียนล่าช้าได้อย่างไร') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_01.pdf'
        }
    }else if (eventText === 'ขั้นตอนการถอนรายวิชาติด w') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้ https://grade.rmutr.ac.th/wpcontent/uploads/2019/06reg rmutr process 03.pdf'
        }
    } else if (eventText === 'ขั้นตอนการเพิ่มถอนรายวิชา') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_02.pdf'
        }
    } else if (eventText === 'ขั้นตอนการยื่นคำร้องขอแก้ระดับคะแนนไม่สมบูรณ์ ม.ส.(i)') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_04.pdf'
        }
    } else if (eventText === 'ลาพักการศึกษา') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_05.pdf'
        }
    }else if (eventText === 'คืนสภาพนักศึกษา') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_05.pdf'
        }
    }else if (eventText === 'ขอเอกสารการศึกษา') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_06.pdf '
        }
    }else if (eventText === 'ขอสำเร็จการศึกษา') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_07.pdf'
        }
    }else if (eventText === 'ขึ้นทะเบียนบัณฑิต') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_08.pdf'
        }
    }else if (eventText === 'ติดต่อขอรับเอกสารการศึกษาใช้เวลากี่วัน') {
        msg = {
            'type': 'text',
            'text' : '3 วันทำการ '
        }
    }else if (eventText === 'นักศึกษาสามารถประเมินความพึงพอใจได้ที่ไหน') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้https://qrgo.page.link/d79ih '
        }
    }else if (eventText === 'ลงทะเบียนวันไหน') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้https://reg.rmutr.ac.th/registrar/calendar.asp?avs105219304=1'
        }
    }else if (eventText === 'ลิ้งเข้าระบบทะเบียน') {
        msg = {
            'type': 'text',
            'text' : 'https://reg.rmutr.ac.th/registrar/home.asp'
        }
    }else if (eventText === 'เพิ่ม – ถอนรายวิชา วันไหน') {
        msg = {
            'type': 'text',
            'text' : 'ดูได้ที่ปฏิทินการศึกษาในระบบงานทะเบียนนักศึกษา https://reg.rmutr.ac.th/registrar/calendar.asp?avs105219304=1'
        }
    }else if (eventText === 'ขอแบบฟอร์มทำบัตรนักศึกษาใหม่') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก ลิ้งนี้https://qrgo.page.link/cb5hF'
        }
    }else if (eventText === 'คุยกับบอท') {
        msg = {
            'type': 'text',
            'text' : 'สวัสดีครับสามารถสอบถามน้องบอทได้ตามคำถามได้ครับ,ลืม password เข้าระบบทะเบียนควรทำอย่างไร,ชำระค่าลงทะเบียนล่าช้าได้อย่างไร,ขั้นตอนการถอนรายวิชาติดw,ขั้นตอนการเพิ่มถอนรายวิชา,ขั้นตอนการยื่นคำร้องขอแก้ระดับคะแนนไม่สมบูรณ์ ม.ส.(i),ขอพักการศึกษา,คืนสภาพนักศึกษา,ขอเอกสารการศึกษา,ขอสำเร็จการศึกษา,ขึ้นทะเบียนบัณฑิต,ติดต่อขอรับเอกสารการศึกษาใช้เวลากี่วัน,นักศึกษาสามารถประเมินความพึงพอใจได้ที่ไหน,ลงทะเบียน,เพิ่ม-ถอนรายวิชา วันไหน,ขอแบบฟอร์มทำบัตรนักศึกษาใหม่'
        }
    }else if (eventText === 'ขอแบบฟอร์มเอกสารคำร้องต่างงานทะเบียน') {
        msg = {
            'type': 'text',
            'text' : 'https://grade.rmutr.ac.th/แบบคำร้องงานทะเบียน/'
        }
    }else if (eventText === 'location') {
        msg = {
            "type": "location",
            "title": "my location",
            "address": "〒150-0002 東京都渋谷区渋谷２丁目２１−１",
            "latitude": 35.65910807942215,
            "longitude": 139.70372892916203
        }
    } else if (eventText === 'template button') {
        msg = {
            "type": "template",
            "altText": "this is a buttons template",
            "template": {
                "type": "buttons",
                "thumbnailImageUrl": "https://www.thesun.co.uk/wp-content/uploads/2017/03/fifa-17-2.jpg?strip=all&w=742&quality=100",
                "title": "Menu",
                "text": "Please select",
                "actions": [{
                    "type": "postback",
                    "label": "Buy",
                    "data": "action=buy&itemid=123"
                }, {
                    "type": "postback",
                    "label": "Add to cart",
                    "data": "action=add&itemid=123"
                }, {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                }]
            }
        }
    } else if (eventText === 'template confirm') {
        msg = {
            "type": "template",
            "altText": "this is a confirm template",
            "template": {
                "type": "confirm",
                "text": "Are you sure?",
                "actions": [{
                    "type": "message",
                    "label": "Yes",
                    "text": "yes"
                }, {
                    "type": "message",
                    "label": "No",
                    "text": "no"
                }]
            }
        }
    } else if (eventText === 'carousel') {
        msg = {
            "type": "template",
            "altText": "this is a carousel template",
            "template": {
                "type": "carousel",
                "columns": [
                    {
                        "thumbnailImageUrl": "https://www.thesun.co.uk/wp-content/uploads/2017/03/fifa-17-2.jpg?strip=all&w=742&quality=100",
                        "title": "this is menu",
                        "text": "description",
                        "actions": [
                            {
                                "type": "postback",
                                "label": "Buy",
                                "data": "action=buy&itemid=111"
                            },
                            {
                                "type": "postback",
                                "label": "Add to cart",
                                "data": "action=add&itemid=111"
                            },
                            {
                                "type": "uri",
                                "label": "View detail",
                                "uri": "http://example.com/page/111"
                            }
                        ]
                    },
                    {
                        "thumbnailImageUrl": "https://www.thesun.co.uk/wp-content/uploads/2017/03/fifa-17-2.jpg?strip=all&w=742&quality=100",
                        "title": "this is menu",
                        "text": "description",
                        "actions": [
                            {
                                "type": "postback",
                                "label": "Buy",
                                "data": "action=buy&itemid=222"
                            },
                            {
                                "type": "postback",
                                "label": "Add to cart",
                                "data": "action=add&itemid=222"
                            },
                            {
                                "type": "uri",
                                "label": "View detail",
                                "uri": "http://example.com/page/222"
                            }
                        ]
                    }
                ]
            }
        }
    }

    return client.replyMessage(event.replyToken, msg);
}

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('run at port', app.get('port'));
});
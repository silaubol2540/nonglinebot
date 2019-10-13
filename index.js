const express = require('express');
const line = require('@line/bot-sdk');
const request = require('request')
const sqlite3 = require("sqlite3").verbose();
const app = express();
const db = new sqlite3.Database("./demo1.sqlite", err=> {
    console.log(err);
})
const data = {
    id : null
}
app.get('/data',(req,res)=>{
    db.all("SELECT * FROM question", [], (err,row) => {
        data.id = JSON.stringify(row)
        row.map((item)=> { console.dir(item) })
    });
    res.setHeader('content-type','application/json');
    res.send(data.id)
})





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
        text: 'linebotฝ่ายทะเบียนสำนักส่งเสริมวิชาการและงานทะเบียนสวัสดีครับติดต่อสอบถามเลือกตามเมนูที่ขึ้นมาหน้าจอได้เลยครับหรือกดติดตามได้ทางเพจ\nfacebook https://www.facebook.com/regrmutr/\nwedsite:https://grade.rmutr.ac.th/'
    };

    var eventText = event.message.text.toLowerCase();

    if (eventText === '1') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถ reset passwort\nได้ผ่าน https://grade.rmutr.ac.th/elementor-5171/'
        }
    }else if (eventText === '2') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_01.pdf'
        }
    }
    else if (eventText === 'update') {


        // db.all("SELECT * FROM question", [], (err, row) => {
        //     // console.dir(row);
        //     data.id = JSON.stringify(row)
        //     // row.map((item) => { console.dir(item) })
        // });
        request({
            method: 'POST',
            uri: 'https://notify-api.line.me/api/notify',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                bearer:'wZb1AYN4I0HCixZd5UioSbcgACCSThFElSnevSBSN7F', //token
            },
            form: {
                message: `this is eventext=${data.id}`, //ข้อความที่จะส่ง
            },
        }, (err, httpResponse, body) => {
            if (err) {
                console.log(err)
            } else {
                console.log(body)
            }
        })

        msg={
            'type':'text',
            'text':data.id
        }
        
    }
    else if (eventText === '3') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้ https://grade.rmutr.ac.th/wpcontent/uploads/2019/06reg rmutr process 03.pdf'
        }
    } else if (eventText === '4') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_02.pdf'
        }
    } else if (eventText === '5') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_04.pdf'
        }
    } else if (eventText === '6') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_05.pdf'
        }
    }else if (eventText === '7') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_05.pdf'
        }
    }else if (eventText === '8') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_06.pdf '
        }
    }else if (eventText === '9') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_07.pdf'
        }
    }else if (eventText === '10') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้ https://grade.rmutr.ac.th/wp-content/uploads/2019/06/reg_rmutr_process_08.pdf'
        }
    }else if (eventText === '11') {
        msg = {
            'type': 'text',
            'text' : 'เป็นเวลา 3 วันทำการ '
        }
    }else if (eventText === '12') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้ https://qrgo.page.link/d79ih '
        }
    }else if (eventText === '13') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้https://reg.rmutr.ac.th/registrar/calendar.asp?avs105219304=1'
        }
    }else if (eventText === 'ลิ้งเข้าระบบทะเบียน') {
        msg = {
            'type': 'text',
            'text' : 'https://reg.rmutr.ac.th/registrar/home.asp'
        }
    }else if (eventText === '14') {
        msg = {
            'type': 'text',
            'text' : 'ดูได้ที่ปฏิทินการศึกษาในระบบงานทะเบียนนักศึกษา\nhttps://reg.rmutr.ac.th/registrar/calendar.asp?avs105219304=1'
        }
    }else if (eventText === '15') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จาก\nลิ้งนี้https://qrgo.page.link/cb5hF'
        }
    }else if (eventText === 'คุยกับบอท') {
        msg = {
            'type': 'text',
            'text' : 'สวัสดีครับสามารถเลือกคำถามได้ตามตัวเลขตามหัวข้อคำถามได้เลยครับหรือถ้าไม่สะดวกสามารถเลือกกดที่Rich menuที่ขึ้นหน้าจอได้เลยคับ\n1.ลืมpasswordเข้าระบบทะเบียนควรทำอย่างไร\n2.ชำระค่าลงทะเบียนล่าช้าได้อย่างไร\n3.ขั้นตอนการถอนรายวิชาติดw\n4.ขั้นตอนการเพิ่มถอนรายวิชา\n5.ขั้นตอนการยื่นคำร้องขอแก้ระดับคะแนนไม่สมบูรณ์ ม.ส.(i)\n6.ขอพักการศึกษา\n7.คืนสภาพนักศึกษา\n8.ขอเอกสารการศึกษา\n9.ขอสำเร็จการศึกษา\n10.ขึ้นทะเบียนบัณฑิต\n11.ติดต่อขอรับเอกสารการศึกษาใช้เวลากี่วัน\n12.นักศึกษาสามารถประเมินความพึงพอใจได้ที่ไหน\n13.ลงทะเบียนวันไหน\n14.เพิ่ม-ถอนรายวิชาวันไหน\n15.ขอแบบฟอร์มทำบัตรนักศึกษาใหม่\n16.ขอแบบฟอร์มเอกสารคำร้องต่างๆงานทะเบียน\17.ข่าสารการรับสมัคร\n18.ติดต่อสอบถาม'
        }
    }else if (eventText === 'ขอแบบฟอร์มเอกสารคำร้องต่างๆฝ่ายงานทะเบียน') {
        msg = {
            'type': 'text',
            'text' : 'https://grade.rmutr.ac.th/แบบคำร้องงานทะเบียน/'
        }
    }else if (eventText === 'ติดต่อสอบถาม') {
        msg = {
            'type': 'text',
            'text' : 'สวัสดีครับ ท่านสามารถติดต่อสอบถามข้อมูลเกี่ยวกับฝ่ายทะเบียนสำนักส่งเสริมวิชาการและงานทะเบียนมหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร์ได้ เช่น  การรับสมัคร แบบฟอร์มเอกสาร หรือการลงทะเบียน\nfacebook:https://www.facebook.com/regrmutr/?epa=SEARCH_BOX\nwedsite:https://grade.rmutr.ac.th/\nสามารถติดต่อได้ที่024416000\nติดต่อเจ้าหน้าที่คณะวิศวะ 2313\nติดต่อเจ้าหน้าที่คณะสถาปัต และวิทยาศาสตร์ 2308\nติดต่อเจ้าหน้าที่คณะบริหาร 2312\nเรื่องทั่วไปติดต่อสอบถาม 2304, 2305\nเทียบโอนผลการเรียน 2301\nทำบัตรนักศึกษาระบบงานทะเบียน 2302'
        }
    }else if (eventText === 'ข่าวสารการรับสมัคร') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถกดดูข้อมูลได้จาก\nลิ้งนี้https://tcas.rmutr.ac.th/category/%e0%b8%82%e0%b9%88%e0%b8%b2%e0%b8%a7%e0%b8%aa%e0%b8%b2%e0%b8%a3%e0%b8%81%e0%b8%b2%e0%b8%a3%e0%b8%a3%e0%b8%b1%e0%b8%9a%e0%b8%aa%e0%b8%a1%e0%b8%b1%e0%b8%84%e0%b8%a3/'
        }
    }else if (eventText === '13') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถดูข้อมูลได้จากปฏิทินการศึกษาในระบบทะเบียน\nhttps://reg.rmutr.ac.th/registrar/calendar.asp?schedulegroupid=1&acadyear=2563&d1=1&semester=1'
        }
    }else if (eventText === '16') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถเลือกแบบฟอร์มเอกสารคำร้องต่างๆ\nhttps://grade.rmutr.ac.th/%e0%b9%81%e0%b8%9a%e0%b8%9a%e0%b8%84%e0%b8%b3%e0%b8%a3%e0%b9%89%e0%b8%ad%e0%b8%87%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%97%e0%b8%b0%e0%b9%80%e0%b8%9a%e0%b8%b5%e0%b8%a2%e0%b8%99/'
        }
    }else if (eventText === '18') {
        msg = {
            'type': 'text',
            'text' : 'สวัสดีครับ ท่านสามารถติดต่อสอบถามข้อมูลเกี่ยวกับฝ่ายทะเบียนสำนักส่งเสริมวิชาการและงานทะเบียนมหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร์ได้ เช่น  การรับสมัคร แบบฟอร์มเอกสาร หรือการลงทะเบียน\nfacebook:https://www.facebook.com/regrmutr/?epa=SEARCH_BOX\nwedsite:https://grade.rmutr.ac.th/\nสามารถติดต่อได้ที่024416000\nติดต่อเจ้าหน้าที่คณะวิศวะ 2313\nติดต่อเจ้าหน้าที่คณะสถาปัต และวิทยาศาสตร์ 2308\nติดต่อเจ้าหน้าที่คณะบริหาร 2312\nเรื่องทั่วไปติดต่อสอบถาม 2304, 2305\nเทียบโอนผลการเรียน 2301\nทำบัตรนักศึกษาระบบงานทะเบียน 2302'
        }
    }else if (eventText === '17') {
        msg = {
            'type': 'text',
            'text' : 'นักศึกษาสามารถศึกษาข้อมูลได้จาก\nwebsite https://tcas.rmutr.ac.th/'
        }
    }else if (eventText === 'สวัสดีครับ') {
        msg = {
            'type': 'text',
            'text' : 'สวัสดีครับ ผมคือ linebot ฝ่ายทะเบียนสำนักส่งเสริมวิชาการและงานทะเบียนมหาวิทยาลัยเทคโนโลยีราชมงคลรัตนโกสินทร์\nยินดีให้บริการครับ'
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

    else {
        
        msg = {
            type: 'text',
            text: 'linebotฝ่ายทะเบียนสำนักส่งเสริมวิชาการและงานทะเบียนสวัสดีครับติดต่อสอบถามเลือกตามเมนูที่ขึ้นมาหน้าจอได้เลยครับหรือกดติดตามได้ทางเพจ\nfacebook https://www.facebook.com/regrmutr/\nwedsite:https://grade.rmutr.ac.th/'
        };
        if (eventText!== "hello, world" && eventText!== null) {
            db.all("INSERT INTO  question(question) VALUES(?)", [eventText], (err) => {
                if(err) console.dir(err.message);
    
            });
        }
      
    }

    return client.replyMessage(event.replyToken, msg);
}

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('run at port', app.get('port'));
});
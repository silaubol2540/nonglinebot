const express = require('express');
const line = require('@line/bot-sdk');
const request = require('request')
const app = express();
const {clientDB} = require('./connect')
const data = {
    id : null
}
const IDB = "INSERT INTO question (question) VALUES ($1)"
const SDB = "select * from question"
clientDB.connect();
app.get('/data', (req, res) => {
   
        let result = []
         clientDB.query(SDB,(err, resDB) => {
            resDBult.push(resDB.rows)
            data.id=JSON.stringify(resDB.rows)
            if (err) throw err;
            for (let row of resDB.rows) {
                
              console.log(JSON.stringify(row));
            }
            console.log(`this is = ${result}`);
          });
          
        
         
})

require('dotenv').config();



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


        let result = []
        clientDB.query(SDB,(err, resDB) => {
           
           
           if (err) throw err;
           for (let row of resDB.rows) {
            result.push(row)
             console.log(JSON.stringify(row));
           }
           data.id=JSON.stringify(result)
           console.log(`this is = ${result}`);
         });
        request({
            method: 'POST',
            uri: 'https://notify-api.line.me/api/notify',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                bearer: 'wZb1AYN4I0HCixZd5UioSbcgACCSThFElSnevSBSN7F', //token
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
            'text': data.id
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
    }

    else {
        
        msg = {
            type: 'text',
            text: 'linebotฝ่ายทะเบียนสำนักส่งเสริมวิชาการและงานทะเบียนสวัสดีครับติดต่อสอบถามเลือกตามเมนูที่ขึ้นมาหน้าจอได้เลยครับหรือกดติดตามได้ทางเพจ\nfacebook https://www.facebook.com/regrmutr/\nwedsite:https://grade.rmutr.ac.th/'
        };
        if (eventText!== "hello, world" && eventText!== null) {
            //   clientDB.connect();
    clientDB.query(IDB,[eventText],(err, resDB) => {
        if (err) throw err;
        for (let row of resDB.rows) {
          console.log(JSON.stringify(row));
        }
      //  clientDB.end();
      });
        }
      
    }

    return client.replyMessage(event.replyToken, msg);
}

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('run at port', app.get('port'));
});
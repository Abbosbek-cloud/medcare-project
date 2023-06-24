import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const SingleCard = (props) => {
  return (
    <Grid item xs={12} sm={9} md={8}>
      <Typography
        pt={"8px"}
        fontSize={26}
        lineHeight={"140%"}
        color="black.main"
        borderTop={"1px solid #EEEEEE"}
      >
        Homiladorlikning asosiy belgisi paydo bo'lishidan oldin - hayz
        ko'rishning kechikishi, tanadagi o'zgarishlar sezilmaydigan tarzda sodir
        bo'ladi. Ammo, kimdir uchun ular birinchi oydan oldin ham sezgir
        bo'ladi. Ushbu o'zgarishlar embrionni himoya qilishga, uning
        rivojlanishini qo'llab-quvvatlashga qaratilgan.
      </Typography>
      <Typography
        fontSize={36}
        lineHeight={"120%"}
        color="black.main"
        mt={"40px"}
      >
        Homiladorlikning birinchi belgilari qachon paydo bo'ladi?
      </Typography>
      <Typography
        fontSize={20}
        lineHeight={"150%"}
        color="text.light"
        mt={"24px"}
      >
        Ko'pgina hollarda ayollar homiladorlik faktini olti haftagacha
        sezmaydilar. Biroq, bu individual masala bo'lib qoladi va ma'lum bir
        shaxsga mos kelmasligi mumkin. Ba'zida ayol deyarli kontseptsiya
        paytidan boshlab tanadagi o'zgarishlarni sezishi mumkin, ba'zida hayz
        ko'rishning yo'qligi homiladorlikni ko'rsatadi. Bu, odatda, er-xotin
        bolani rejalashtirayotganda, uni uzoq vaqt kutayotganda sodir bo'ladi,
        buning natijasida barcha o'zgarishlar seziladi. Bepushtlik va bolani
        homilador qilish qiyin bo'lgan kasalliklardan davolanayotganlar
        homiladorlik haqida darhol bilib olishadi. Ammo tasodifiy homiladorlik
        eng boshida sezilishi mumkin. Er-xotin juda uzoq vaqt davomida homilador
        bo'lishga harakat qilganda, ba'zida yillar davom etadi, ikkala hamkor
        ham homiladorlik testi, hatto eng aniq ko'rinadigan holatda ham, salbiy
        bo'lishi mumkinligini tushunadi. Ko'pchilik homilador bo'lishga uzoq
        urinishlardan so'ng, hayz ko'rish boshlanganda yoki test homiladorlik
        yo'qligini ko'rsatsa, paydo bo'ladigan umidsizlikni yaxshi biladi. Shuni
        esda tutish kerakki, kontratseptiv vositalarni qabul qilish tugaganidan
        keyin bir yil o'tgach, bolani homilador qilish mumkin.
      </Typography>
      <Box
        mt={"24px"}
        component="img"
        src="/topic-mother-img.png"
        width="100%"
        // height="540px"
        objectFit="cover"
      />
      <Typography
        fontSize={20}
        lineHeight={"150%"}
        color="text.light"
        mt={"24px"}
      >
        Quyida keltirilgan homiladorlik belgilari hamma uchun majburiy emas.
        Ba'zilar barcha dastlabki belgilarni darhol boshdan kechirishlari
        mumkin, boshqalari esa buni umuman sezmasliklari mumkin.
        Homiladorlikning dastlabki bosqichlarida ko'plab ayollar fiziologik va
        psixologik nuqtai nazardan hech narsa sezmaydilar. Ammo bu jarayon
        qandaydir noto'g'ri ekanligini anglatmaydi. Hech qanday xavf yo'q,
        homila rivojlanishi bunga bog'liq.
      </Typography>
      <Typography
        fontSize={36}
        lineHeight={"120%"}
        color="black.main"
        mt={"40px"}
      >
        Homilador ekanligingizni qanday bilish mumkin?
      </Typography>
      <Typography
        fontSize={20}
        lineHeight={"150%"}
        color="text.light"
        mt={"24px"}
      >
        Ba'zilar uchun bu shunchaki noaniq so'zlar, tanada biror narsa aniq
        o'zgargan va ba'zi jarayonlar sodir bo'ladi, tanadagi hislar o'zgaradi.
        Ba'zida ayollar embrionning bachadon devoriga o'rnatilganligini aniq
        aytishadi, bu kontseptsiyadan keyin sakkizinchi-o'ninchi kuni sodir
        bo'ladi. Ko'pincha hissiyotlar psixologik xususiyatga ega bo'lib, ayol
        muvaffaqiyatli kontseptsiya haqida aniq bilsa. Homiladorlikning boshida
        ham, keyingi bosqichlarida ham ayol tanasida o'zgarishlarni sezadi.
      </Typography>
    </Grid>
  );
};

export default SingleCard;

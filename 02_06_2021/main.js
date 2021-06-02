const khodaoly = [
    "Từ bi là vũ khí tốt nhất của chính bạn.",
    "Có lòng thương yêu vô tư thì sẽ có tất cả.",
    "Mỗi một vết thương đều là một sự trưởng thành.",
    "Hạnh phúc là để cảm nhận, không phải để ba hoa.",
    "Tình cảm là để chia sẻ, không phải để lợi dụng.",
    "Cha mẹ là để hiếu thuận, không phải để đòi hỏi.",
    "Bạn bè là để sớt chia, không phải để lấn lướt.",
    "Công danh là để cống hiến, không phải để kiêu mạn.",
    "Bình yên đến từ bên trong. Đừng tìm nó bên ngoài.",
    "Kiên quyết rèn luyện mình để có được sự bình yên."
]

const khohinhanh = [
    'a', 'b', 'c'
]

const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const port = 3000;

// set up view engine, set default layout to main.handlebars
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));

// home page
app.get('/', (req, res) => res.render('home'));
// about page
app.get('/about', (req, res) => res.render('about'));

// moi ngay 1 dao ly, moi lan refresh la 1 cau dao ly ngau nhien
app.get('/moingaymotdaoly', (req, res) => {
    const daolyhomnay = khodaoly[Math.floor(Math.random()*khodaoly.length)];

    res.render('moingaymotdaoly', {content: daolyhomnay});
});

// random image eachtime refresh.
app.get('/hinhanh', (req, res) => {
    const hinhanh = khohinhanh[Math.floor(Math.random()*khohinhanh.length)];

    res.render('hinhanh', {source: hinhanh});
});

app.use((req, res) => {
    res.status(404);
    // no need to specify content-type
    res.render('404');
});

app.use((err, req, res, next) => {
    // log error message
    console.log(err.message);
    res.status(500);
    res.render('500');
});

app.listen(port, () => {
    console.log(`Server started at port ${port}, Press Ctrl + C to exit`);
});

// 轮播图的js
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');

// 总图数  3个
const totalSlides = slideElements.length;

// 定义当前索引，从第一张图片开始
let currentIndex = 0;


function showSlide(index) {
    // 当图片处于最后一张时，下一张从头开始，实现循环。
    if (index >= totalSlides) {
        currentIndex = 0;
        
    } else if (index < 0) {  // 当图片处于第一张时，点击了左边的上一张按钮，触发。显示为最后一张。
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// 每3秒自动切换
setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);


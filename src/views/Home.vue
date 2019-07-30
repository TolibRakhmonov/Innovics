<template>
  <div class="home">
     <header>
        <div class="subheader">
            <h2 class="ordinary"><i>CustomPage</i></h2>
            <h2 class="urgent"><i>CustomPage</i></h2>
            <i class="fa fa-bars" aria-hidden="true"></i>
            <nav>
                <li><a href="#home" id="ahome" class="active">Главная</a></li>
                <li><a href="#gallery" id="agallery">Gallery</a></li>
                <li><a href="#about" id="aabout">О НАС</a></li>
                <li><a href="#purpose" id="apurpose">Purpose</a></li>
                <li><a href="#samples" id="aprojects">Проекты</a></li>
                <li><a href="#prices" id="aprices">Цены</a></li>
                <li><a href="#contacts" id="acontacts">Контакты</a></li>
            </nav>
        </div>
    </header>
    <div class="container">
       <div class="parralex" id="home">
        <div class="parallax-window" data-parallax="scroll"
         data-image-src="" id="home" data-speed="0.5">
            <div class="entry">
              <div class="own-btn">
                <img src="@/assets/Images/Logo/logowhite.png">
                <h1><i>Создаем сайты xорошего качества и цены</i></h1>
                    <button> <router-link to="/form">Get Started</router-link></button>
                
              </div>
              
            </div>
        </div>
        </div>
        <div class="gallery" id="gallery">
            <div class="card">
                <div class="text">
                    <h3>Адаптивность</h3>
                </div>
                <img src="@/assets/Images/Gallery/1.jpg" alt="">
            </div>
            <div class="card s1">
                <div class="text">
                    <h3>Креативность</h3>
                </div>
                <img src="@/assets/Images/Gallery/2.jpg" alt="">
            </div>
            <div class="card s2">
                <img src="@/assets/Images/Gallery/3.jpg" alt="">
                <div class="text">
                    <h3>Быстрый</h3>
                </div>
            </div>
            <div class="card s1">
                <img src="@/assets/Images/Gallery/4.jpg" alt="">
                <div class="text">
                    <h3>Flexible</h3>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div class="about" id="about">
            <div class="subabout">
                <div class="ab1">
                    <h3>О НАС</h3>
                    <p>WebMaker это команда создающая сайты с 2018 года. Мы используем самые современные и эффективные способы и технологии при создании сайтов. Несмотря на молодой возраст нашей команды, мы создаём сайты отличного качества и по привлекательной цене. Мы тщательно изучаем заказ и предпочтения наших клиентов перед разработкой проекта, чтобы добиться отличных результатов. Наша команда состоит из опытных программистов, веб дизайнеров. За создание сайта принимаются в дело сразу несколько разработчиков, что значительно облегчает процесс и сокращает время разработки. Мы всегда рады помочь вам при создании красивого, удобного и быстрого сайта за кратчайшие сроки!</p>
                </div>
                <div class="ab2"><img src="@/assets/Images/Basic/laptop.jpg"></div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="parralex2" id="purpose">
            <div class="purpose">
                <div class="text">
                    <h3>We Make Webs</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis sapiente, quaerat! Libero numquam necessitatibus tempore nihil voluptates iste provident eum!</p>
                </div>
            </div>
        </div>
        <div class="samples" id="samples">
            <h3>Наши Проекты</h3>
            <p>Представляем вашему вниманию несколько наших сайтов над которыми мы работали. Будьте уверены, вы можете нам доверять.</p>
            <div class="sample">
                <a href="">
                    <h4>MinecraftStorage</h4><img src="@/assets/Images/Samples/mc.png"></a>
            </div>
            <div class="sample">
                <a href="">
                    <h4>Buma</h4><img src="@/assets/Images/Samples/buma.png"></a>
            </div>
            <div class="sample">
                <a href="">
                    <h4>Sodikovschool</h4><img src="@/assets/Images/Samples/sodik.png"></a>
            </div>
            <div class="clear"></div>
        </div>
        <div class="prices" id="prices">
            <h3>Цены</h3>
            <div class="prices1">
                <div class="price">
                <div class="price1">
                    <h3>Визитки</h3>
                    <p>Визитки включают в себя сайты компаний, фирм которые состоят из одной или нескольких страниц.Будут иметь такие вкладки как: главная,контакты,о нас и т.д.</p>
                    <h4>До 150$</h4>
                </div>
               </div>
                <div class="price">
                <div class="price1">
                    <h3>Basic</h3>
                    <p>Сайты basic имеют хороший дизайн, больше функциональности и анимации. У пользователей будет возможность написать сообщение или отзыв. В целом сайты имеют динамичность.</p>
                    <h4>До 200$</h4>
                </div>
                </div>
                <div class="price">
                <div class="price1">
                    <h3>Premium</h3>
                    <p>Разработка таких сайтов может занимать больше времени, так как они будут полностью динамичными. В список premium входит: интернет-магазины, блоггерские сайты и т.д.</p>
                    <h4>До 800$</h4>
                </div>
                </div>
                <div class="clear"></div>
            </div>
        </div>
        <div class="contacts" id="contacts">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57007.16342896994!2d69.34646679441789!3d41.32909203860056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef48a8ed4d0e9%3A0x3772abeffc72e7b8!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQmNC90YXQsA!5e0!3m2!1sru!2s!4v1539621560112"  style="border:0" allowfullscreen></iframe>
           <a class="changer">Показать Карту</a>
            <div class="info">
            </div>
            <div class="contact">
               <h4>Напишите Нам</h4>
                <form action="" method="post">
                    <p style="text-align: center;">Ответ мы отправим на вашу почту.</p>
                    <input type="text" placeholder="Имя" name="user" required><br><br>
                    <input type="email" placeholder="Почта" name="email" required><br><br>
                    <p>Сообщение</p><textarea name="text" required></textarea><br><br>
                    <button>Отправить</button>
                    <p class="mobile">Номер Телефона: +998903464307</p>
                </form>
            </div>
        </div>
    </div>
    <footer>
        <div class="foot">
            <h4>Мы в Соц.сетях</h4>
            <div class="socials">
            <img src="@/assets/Images/Social/facebook.png">
            <img src="@/assets/Images/Social/instagram.png">
            </div>
        </div>
        <div class="foot">
            <h4><i>WebMaker</i></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At distinctio exercitationem saepe velit praesentium aliquid recusandae vero fuga minus consequuntur.</p>
        </div>
        <div class="clear"></div>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>

<style >
  * {
    scroll-behavior: smooth;
  }
  .parallax-window {
    background: url('../assets/Images/Basic/imagepar.jpg')
  }
  #home {
    background-attachment: fixed;
  }
    .own-btn {
    text-align: center;
    }
  .own-btn button{
      padding: 15px 20px;
      cursor: pointer;
      background: transparent;
      color: #fff;
      border-radius: 15px;
  }
  .own-btn button:hover{
    background: rgba(0,0,0,0.1);
    color: #fff;
    border: 2px solid #fff
      
  }
  .prices {
      display: none;
  }
</style>

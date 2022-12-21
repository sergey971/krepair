# Сайт для фирмы Krepair, занимающиеся ремонтом телефонов, фотоаппаратов, электросамокатов, аудиосистем.

## Отзыв

1. Хорошее понимание HTML-верстки, осознанное подключение JS/CSS файлов в нежном месте
2. Осознанные имена Классов, использование БЭМ-именования
3. Если вдруг для проекта использовался SCSS - То лучше, чтобы в исходниках он и был. А в README - инструкция как собрать проект.
4. Сделан адаптивный дизайн макета 

## Идеи для улучшения

- [ ] TODO: можно погуглить советы как составлять README, или взять что-нибудь за образец - пот [неплохой](https://github.com/jehna/readme-best-practices/blob/master/README-default.md), не обязательно использовать все разделы - но хорошая пометка, чтобы ничего не забыть.
- [ ] TODO: Есть опечатки в README, как план минимум в VSCode можно установить проверку орфографии:
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
  - [Russian - Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-russian)
- [ ] TODO: В будущем, стоит подумать как сохранять и подключать внешние статические файлы из CDN (Шрифты, стили, Скрипты), чтобы в случае когда ссылка перестала работать, можно всегда было переключиться на свою локальную копию.
- [ ] TODO: В классах верстки достаточно много классов, использующих повторяющиеся:
  - функции Флекс-бокса: `display: flex;`, `justify-content`, `column-gap`, `align-items`
  - и шрифтов: `font-size`, `line-height`, `font-weight`, `letter-spacing`
  - Можно подумать, как сделать +-гибкие универсальные классы, например как в bootstrap и брать их из проекта в проект
- [ ] TODO: у карусели почему-то стрелочки не `cursor:pointer` - не критично

## Сайт сделан как проект для партфолио.

### Что внутри:
- Оптимизация под декстоп, смартфоны, планшеты. 3 разных разрешения
- Мобильная навигация
- Слайдер
- Карта yandex

### Использумые технологии
<p align="left">
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a> 
<a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/></a>
<a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
</p>

[**Онлайн демо**](https://sergey971.github.io/krepair/)

### Тестировать локально

```
git clone https://github.com/sergey971/krepair.git

```

Открыть index.html

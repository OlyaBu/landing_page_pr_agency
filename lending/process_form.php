<?
if (array_key_exists('messageFF', $_POST)) {
  mail ("ваш@ящик",
        "заполнена контактная форма с ".$_SERVER['HTTP_REFERER'],
        "Имя: ".$_POST['nameFF']."\nEmail: ".$_POST['contactFF']."\nСообщение: ".$_POST['messageFF']);
  echo $_POST['nameFF'];
}
?>
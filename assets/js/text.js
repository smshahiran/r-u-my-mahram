
function setAboutEn() {

	var header = '<h1 class="section-title wow fadeIn" data-wow-delay=".2s">What is <br>R U My Mahram?</h1>';
    var openText = '<div class="row col-md-8 col-md-offset-2 text-center wow fadeIn">';
    
    var text = '<p class="lead">R U My Mahram? is a simple app that allows you to check who is and isn\'t your mahram. In short, if you are a mahram to someone, it means that it is  permissible to have a physical contact with the person. Please note that this explanation is not extensive, and so you should consult your ustadh/ah (Islamic teachers) if you wish to understand more about the term mahram.</p>';
	text = text + '<p class="lead">Please also note that as of now, the list of relationships in this site is limited to your direct blood relatives only. More complicated relationships might be added to the list in the future, if there is sufficient demand.</p>';			
    text = text + '<p class="lead">For any feedbacks and/or enquiries, feel free to <a href="mailto:smshahiran@gmail.com">email me</a>.</p>';

    var closeText = '</div>';

    $('#aboutHTML').html(header + openText + text + closeText);
}

function setAboutBM() {

	var header = '<h1 class="section-title wow fadeIn" data-wow-delay=".2s">Apa itu <br>R U My Mahram?</h1> ';
    var openText = '<div class="row col-md-8 col-md-offset-2 text-center wow fadeIn">';
    
    var text = '<p class="lead">R U My Mahram? merupakan satu aplikasi yang membolehkan ada memeriksa siapa mahram dan siapa bukan mahram anda. Ringkasnya, kalau dia mahram anda maka anda boleh salam dengannya. Kalau bukan mahram, memang tak boleh la kan. Penerangan dalam aplikasi mungkin tidak sempurna. Anda boleh dapatkan khidmat nasihat ostad & ostajah anda bagi penerangan yang lebih padu.</p>';
	text = text + '<p class="lead">Setiap hubungan dalam aplikasi ini merupakan adalah terhad pada pertalian darah secara terus. Hubungan lebih kompleks akan ditambah jika ada permintaan.</p>';
    text = text + '<p class="lead">Sebarang maklum balas dan/atau pertanyaan, boleh lah hubungi saya di <a href="mailto:smshahiran@gmail.com">smshahiran@gmail.com</a>.</p>';

    var closeText = '</div>';

    $('#aboutHTML').html(header + openText + text + closeText);
}
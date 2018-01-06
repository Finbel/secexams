(function() {
	data = exams;

	printQuestions = function(subject){
		window.scrollTo(0, 0);
		$("#brand").text("Back to subjects!");
		$(".subjects-table").hide();
		$("#subject-title").text(subject);

		for (var i = 0; i < data[subject]["questions"].length; i++) {
			badge = document.createElement('table');
		    badge.className = 'subject-question table table-curved';
		    badge.innerHTML = '<tr class="question-row table-light">' +
				'<td class="question">' + data[subject]["questions"][i].question + '</td>' +
		        '</tr><tr class="question-row">' +
				'<td class="answer-text answer-row table-hidden">' + data[subject]["questions"][i].answer + '<br>' +
				'Source: ' + data[subject]["questions"][i].sources + '</td>' +
				'<td class="alt-text answer-row">Click here to reveal answer</td>' +
				'</tr>';
		    document.getElementById(subject).appendChild(badge);	
		}	
		$(".answer-row").click(function(){
			$(this).toggleClass('table-hidden');
			$(this).siblings().toggleClass('table-hidden');
		});

		$(".navbar-brand").click(function(){
			$('.navbar-brand').off('click');
			$('#brand').text("Welcome!");
			$(".subjects-table").show();
			showSubjects(subject);
		});
	}

	showSubjects = function(){
		window.scrollTo(0, 0);
		$("table").remove(".subject-question");
		$("#subject-title").text("click on a subject");
	}
	
	for (var subject in data) {
		var questions = data[subject]["questions"].length;
		var badge = document.createElement('tr');
		badge.className = subject;		
		badge.innerHTML = '<td class="subject">' + subject + '</td>' +
				'<td class="questions">' + questions + '</td>' +
				'<td class="importance">' + data[subject].importance + '</td>';
		document.getElementById("subjects").appendChild(badge);
		
		let str = subject
		console.log("adding " + str);		
		$("."+str).click(function(){
			printQuestions(str);
		});
	}
})();

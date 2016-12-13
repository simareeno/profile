function minWidthDropdown() {
	var dropdownUser = $('.bar__personal-user').width();
	var dropdownMoney = $('.bar__personal-money').width();

	$('.bar__personal-user .dropdown__list').css( 'min-width', dropdownUser);
	$('.bar__personal-money .dropdown__list').css( 'min-width', dropdownMoney);
}

$(document).ready(function () {

	// $(".bar").load("bar.html");

	minWidthDropdown();

	$('.dropdown').click(function () {
		$('.dropdown').not(this).removeClass('dropdown--active');
		$(this).toggleClass('dropdown--active');
		event.stopPropagation();
	});

	$('html').click(function() {
		$('.dropdown').removeClass('dropdown--active');
	});




	$(document).ready( function() {

		var inputLength, initialNickname, nicknameCurrent, avatarChanged, nicknameLength, parent;

		initialNickname = $('#input1').text();

		window.setInterval(function(){
			inputLength = $('#input1').outerWidth();
			applyPosition(inputLength);
		}, 50);

		jQuery.fn.selectText = function(){
		   var doc = document;
		   var element = this[0];
		   if (doc.body.createTextRange) {
			   var range = document.body.createTextRange();
			   range.moveToElementText(element);
			   range.select();
		   } else if (window.getSelection) {
			   var selection = window.getSelection();
			   var range = document.createRange();
			   range.selectNodeContents(element);
			   selection.removeAllRanges();
			   selection.addRange(range);
		   }
		};

		function applyNickname() {
			nicknameCurrent = $('#input1').text();
			nicknameLength = nicknameCurrent.length;
			if (nicknameLength < 3) {
				$('.editable-nickname__tooltip').addClass('editable-nickname__tooltip--active editable-nickname__tooltip--error');
				$('.editable-nickname__tooltip-text').text('Слишком короткий ник');
				// setTimeout( "$('.editable-nickname__tooltip').removeClass('editable-nickname__tooltip--active editable-nickname__tooltip--error');", 3000);
				return false;
			} else if (nicknameCurrent === initialNickname) {
			} else {
				$('.editable-nickname__tooltip').addClass('editable-nickname__tooltip--active editable-nickname__tooltip--success');
				$('.editable-nickname__tooltip-text').text('Ник изменен');
				setTimeout( "$('.editable-nickname__tooltip').removeClass('editable-nickname__tooltip--active editable-nickname__tooltip--success');", 1500);
			}
			document.getSelection().removeAllRanges();
			$('#input1').attr('contenteditable', false);
			$('.title-menu').removeClass('title-menu--hide');
			$('.content').removeClass('content--margined');
			$('.title__warning').removeClass('title__warning--active');
			$('.editable-nickname__change').removeClass('editable-nickname__change--editable');
			$('.editable-nickname__icon').removeClass('editable-nickname__icon--close');
			$('.editable-nickname__icon').addClass('editable-nickname__icon--edit');
			$('.editable-nickname__save').removeClass('editable-nickname__save--active');
			initialNickname = $('#input1').text();
			$('.bar__personal-user-nickname').text(initialNickname);
			if (!avatarChanged) {
				setTimeout( startAvatarTip, 1500);
			}
		}

		function startAvatarTip() {
			$(".user__avatar-tip").addClass('tip--active tip--bounce-bottom');
		}

		function startUrlTip() {
			$('.url__tip').addClass('tip--active');
		}

		function hideUrlTip() {
			$('.url__tip').removeClass('tip--active');
		}

		function applyPosition(w) {
			w = Math.round(w) / 2;
			$('.editable-nickname__absolute').css('transform',"translateX(" + w + "px)");
		}

		function cancelNickname() {
			$('#input1').attr('contenteditable', false);
			document.getSelection().removeAllRanges();
			$('.title-menu').removeClass('title-menu--hide');
			$('.content').removeClass('content--margined');
			$('.title__warning').removeClass('title__warning--active');
			$('.editable-nickname__save').removeClass('editable-nickname__save--active');
			$('.editable-nickname__change').removeClass('editable-nickname__change--editable');
			$('.editable-nickname__save').removeClass('editable-nickname__save--active');
			$('.editable-nickname__icon').removeClass('editable-nickname__icon--close');
			$('.editable-nickname__icon').addClass('editable-nickname__icon--edit');
			$('#input1').text(initialNickname);
		}

		function startEdit() {
			$('#input1').attr('contenteditable', true);
			$('#input1').selectText();
			$('.title-menu').addClass('title-menu--hide');
			$('.content').addClass('content--margined');
			$('.title__warning').addClass('title__warning--active');
			$('.editable-nickname__save').addClass('editable-nickname__save--active');
			$('.editable-nickname__change').addClass('editable-nickname__change--editable');
			$('.editable-nickname__tip').removeClass('tip--active');
			$('.editable-nickname__icon').removeClass('editable-nickname__icon--first-time');
			$('.editable-nickname__icon').removeClass('editable-nickname__icon--edit');
			$('.editable-nickname__icon').addClass('editable-nickname__icon--close');
		}

		function closeTooltip() {
			$('.editable-nickname__tooltip').removeClass('editable-nickname__tooltip--active editable-nickname__tooltip--success editable-nickname__tooltip--error');
		}

		$('.dropdown__list-search .input').click(function () {
				event.stopPropagation();
		});

		document.getElementById('body').addEventListener('keypress', function(e) {
			if (e.code !== 'Enter')  {
				closeTooltip();
			}
		});

		document.getElementById('input1').addEventListener('keypress', function(e) {
			inputLength = $('#input1').outerWidth();
			applyPosition(inputLength);
			if (e.code === 'Enter')  {
					applyNickname();
					 e.preventDefault();
			}
		});

		$('.controls__arrow').click(function (e) {
			event.stopPropagation();
		})

		$(document).keyup(function(e) {
			if (e.keyCode === 27) {
				cancelNickname();
				hideAvatarEdit();
				hideUrlTip();
			}
		});

		$(".editable-nickname__tip").addClass('tip--active')

		$('.editable-nickname__save').click(function () {
			applyNickname();
		});

		$('.editable-nickname__icon').click(function () {
			event.stopPropagation();
			if ($('.editable-nickname__icon').hasClass('editable-nickname__icon--edit')) {
				startEdit();
			} else if ($('.editable-nickname__icon').hasClass('editable-nickname__icon--close')) {
				cancelNickname();
				closeTooltip();
			}
		})

		$('.editable-nickname__tip').click(function () {
			startEdit();
		})

		$('.title__content').click(function () {
			event.stopPropagation();
		})

		// $('#input1').dblclick(function () {
		// 	event.stopPropagation();
		// 	startEdit();
		// })

		$('.game').dblclick(function functionName() {
			event.stopPropagation();
		})


		$('.additional__content__link').click(function () {
			$(this).selectText();
		})

		function hideAvatarEdit() {
			$('.user__avatar-dropdown').addClass('user__avatar-dropdown--hide');
		}


		$('.user__avatar-pic, .user__avatar-tip').on('click', function (event) {
			$('.user__avatar-dropdown').toggleClass('user__avatar-dropdown--hide');
			event.stopPropagation();
		})

		$('.user__avatar-dropdown--standart').on('click', function (event) {
			changeAvatar($('.user__avatar-dropdown--standart'));
	  hideTip();
		})

		$('.user__avatar-dropdown--vk').on('click', function (event) {
				changeAvatar($('.user__avatar-dropdown--vk'));
		  hideTip();
			})

		$('.user__avatar-dropdown--fb').on('click', function (event) {
					changeAvatar($('.user__avatar-dropdown--fb'));
			hideTip();
			})

		function changeAvatar(activeClass) {
		  $('.user-avatar-dropdown-item').removeClass('user__avatar-dropdown--active')
		  activeClass.addClass('user__avatar-dropdown--active');
		}

		$('.user__avatar-change').click(function () {
			avatarChanged = true;
			$('.user__avatar-tip').removeClass('tip--active');
		})

		function hideTip() {
		  event.stopPropagation();
			if ($('.user__avatar-dropdown--standart').hasClass('user__avatar-dropdown--active')) {
			  $('.user__avatar-image').addClass('user__avatar-image--hide')
			  $(".bar__personal-user-avatar img").attr("src","img/4game-avatar.png");
			} else if ($('.user__avatar-dropdown--vk').hasClass('user__avatar-dropdown--active')) {
			  $('.user__avatar-image').addClass('user__avatar-image--hide')
			  $('.user__avatar-image--vk').removeClass('user__avatar-image--hide')
			  $(".bar__personal-user-avatar img").attr("src","img/avatar111.jpeg");
			} else {
			  $('.user__avatar-image').addClass('user__avatar-image--hide')
			  $('.user__avatar-image--fb').removeClass('user__avatar-image--hide')
			  $(".bar__personal-user-avatar img").attr("src","img/avatar222.jpg");
			}
			if (avatarChanged && (nicknameCurrent !== 'Рандомный ник')) {
				startUrlTip();
			}
			hideAvatarEdit();
		}

		$(document).on('click', function(e) {
			event.stopPropagation();
			hideAvatarEdit();
			hideUrlTip();
		});

		// $(document).on('dblclick', function (e) {
		// 	event.stopPropagation();
		// 	cancelNickname();
		// })

		$('.user__avatar-dropdown-close').on('click', function(e) {
		  event.stopPropagation();
			$('.user__avatar-dropdown').addClass('user__avatar-dropdown--hide');
		});

		$('.actions-single--settings').click(function () {
			 window.open('settings.html');
		})

		$('.main__about-item--achievements').click(function () {
			window.open('achievements.html');
		})

		var parentTrigger, wasHidden;
		wasHidden = false;

		// function hideHiddenBlocks() {
		// 	$('.visibility-trigger.visibility-trigger--active').addClass('visibility-trigger--hovered');
		// }
		//
		// function showHiddenBlocks() {
		// 	$('.visibility-trigger').removeClass('visibility-trigger--hovered');
		// 	wasHidden = false;
		// }

		// $('.main__characters-list--overflow').bind('mousewheel DOMMouseScroll', function (e) { return false; });

		$('.actions__single--visibility .actions__single-icon').click(function () {
			event.stopPropagation();
			parent = $(this).parent('.actions__single').toggleClass('actions__single--active');
			parentTrigger = $(this).closest('.visibility-trigger').toggleClass('visibility-trigger--active');

			parentTrigger.mouseleave(function () {
				$(this).removeClass('visibility-trigger--nothovered');
			})

			// if (wasHidden === false) {
			// 	hideHiddenBlocks();
			// 	wasHidden = true;
			// } else {
			// 	showHiddenBlocks();
			// }

			$('.actions__single--visibility.actions__single--active').hover(hideHiddenBlocks, showHiddenBlocks);
		})
	});
});

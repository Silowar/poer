/**
 * 语言包
 * Language package
 **/
(function($, owner) {
	var LANG_EN = "English";        // 英语
	var LANG_CN = "Chinese";        // 简体中文
	var LANG_UKR = "Ukrainian";     // 乌克兰语
	var LANG_FRA = "French";        // 法语
	var LANG_ESP = "Spanish";       // 西班牙语
	var LANG_RUS = "Russian";       // 俄语
	var LANG_BLR = "Belarusian";    // 白俄罗斯语
	var LANG_ROM = "Romanian";      // 罗马尼亚语

	owner.lang_options = {
		English: "English",
		Chinese: "简体中文",
//		Ukrainian: "Ukrainian",
		French: "",
		Spanish: "",
		Russian: "Pусский",
		//Russain: "",
		Belarusian: "",
		Romanian: "Romana"
	};

	//label_back
	owner.label_back = function(language){
		switch (language) {
			case LANG_EN:
				return "Back";
			case LANG_CN:
				return "返回";
			case LANG_UKR:
				return "Back";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Назад";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inapoi";
			default:
				return "Back";
		}
	}
	//Holiday Set
	owner.label_holiday_set = function(language){
		switch (language) {
			case LANG_EN:
				return "Holiday Set";
			case LANG_CN:
				return "假日设置";
			case LANG_UKR:
				return "Holiday Set";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Установка отпуска";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setari mod In vacanta";
			default:
				return "Holiday Set";
		}
	}
	// WLAN
	owner.label_wlan = function(language){
		switch (language) {
			case LANG_EN:
				return "WLAN";
			case LANG_CN:
				return "无线网络";
			case LANG_UKR:
				return "WLAN";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "WLAN";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Scanare Gateway in reteaua Wi-Fi...";
			default:
				return "WLAN";
		}
	}
	//Save
	owner.label_save = function(language) {
		switch (language) {
			case LANG_EN:
				return "Save";
			case LANG_CN:
				return "保存";
			case LANG_UKR:
				return "Save";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сохранить";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Salveaza/Trimite";
			default:
				return "Save";
		}
	}

	//Refresh
	owner.label_refresh = function(language) {
			switch (language) {
				case LANG_EN:
					return "Refresh";
				case LANG_CN:
					return "刷新";
				case LANG_UKR:
					return "Refresh";
				case LANG_FRA:
					return "";
				case LANG_ESP:
					return "";
				case LANG_RUS:
					return "Повтор";
				case LANG_BLR:
					return "";
				case LANG_ROM:
					return "Reincarca";
				default:
					return "Refresh";
			}
	}

	//add
	owner.label_add = function(language) {
			switch (language) {
				case LANG_EN:
					return "Add";
				case LANG_CN:
					return "增加";
				case LANG_UKR:
					return "Add";
				case LANG_FRA:
					return "";
				case LANG_ESP:
					return "";
				case LANG_RUS:
					return "Добавить";
				case LANG_BLR:
					return "";
				case LANG_ROM:
					return "Adauga";
				default:
					return "Add";
			}
	}

	//copy
	owner.label_copy = function(language) {
		switch (language) {
			case LANG_EN:
				return "Copy";
			case LANG_CN:
				return "拷贝";
			case LANG_UKR:
				return "Copy";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Копировать";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Copiaza programarea in zilele selectate";
			default:
				return "Copy";
		}
	}

	//submit
	owner.label_submit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Submit";
			case LANG_CN:
				return "提交";
			case LANG_UKR:
				return "Submit";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отправить";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Trimite";
			default:
				return "Submit";
		}
	}

	//Cancel
	owner.label_cancel = function(language) {
		switch (language) {
			case LANG_EN:
				return "Cancel";
			case LANG_CN:
				return "取消";
			case LANG_UKR:
				return "Cancel";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отмена";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Anuleaza";
			default:
				return "Cancel";
		}
	}

	//更新成功
	owner.label_update_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update success";
			case LANG_CN:
				return "更新成功";
			case LANG_UKR:
				return "Update success";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Обновлено";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Actualizare efectuata cu succes!";
			default:
				return "Update success";
		}
	}

	//更新失败
	owner.label_update_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update failed";
			case LANG_CN:
				return "更新失败";
			case LANG_UKR:
				return "Update failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка обновления";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Actualizare esuata.";
			default:
				return "Update failed";
		}
	}

	//设置更新中
	owner.label_set_updating = function(language) {
		switch (language) {
			case LANG_EN:
				return "Settings is updating...";
			case LANG_CN:
				return "设置更新中...";
			case LANG_UKR:
				return "Settings is updating...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройки обновляются...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setarile se actualizeaza...";
			default:
				return "Settings is updating...";
		}
	}

	//更新中
	owner.label_updating = function(language) {
		switch (language) {
			case LANG_EN:
				return "Updating...";
			case LANG_CN:
				return "更新中...";
			case LANG_UKR:
				return "Updating...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Обновляется...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se actualizeaza...";
			default:
				return "Updating...";
		}
	}

	//确认
	owner.label_confirm = function(language) {
		switch (language) {
			case LANG_EN:
				return "Confirm";
			case LANG_CN:
				return "确认";
			case LANG_UKR:
				return "Confirm";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подтвердить";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "PoerSmart";
			default:
				return "Confirm";
		}
	}

	//Yes
	owner.label_yes = function(language) {
		switch (language) {
			case LANG_EN:
				return "Yes";
			case LANG_CN:
				return "是";
			case LANG_UKR:
				return "Yes";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Да";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Da";
			default:
				return "Yes";
		}
	}

	//No
	owner.label_no = function(language) {
		switch (language) {
			case LANG_EN:
				return "No";
			case LANG_CN:
				return "否";
			case LANG_UKR:
				return "No";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нет";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nu";
			default:
				return "No";
		}
	}

	//提醒
	owner.label_tip = function(language) {
		switch (language) {
			case LANG_EN:
				return "Tip";
			case LANG_CN:
				return "提醒";
			case LANG_UKR:
				return "Tip";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Тип";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "PoerSmart";
			default:
				return "Tip";
		}
	}

	//Ok
	owner.label_ok = function(language) {
		switch (language) {
			case LANG_EN:
				return "Ok";
			case LANG_CN:
				return "好的";
			case LANG_UKR:
				return "Ok";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ок";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ok";
			default:
				return "Ok";
		}
	}

	//没有改变
	owner.label_no_change = function(language) {
		switch (language) {
			case LANG_EN:
				return "No change";
			case LANG_CN:
				return "未修改";
			case LANG_UKR:
				return "No change";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Не менять";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nemodificat";
			default:
				return "No change";
		}
	}

	//再按一次退出应用
	owner.label_click_to_exit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Click again, then exit app";
			case LANG_CN:
				return "再按一次退出应用";
			case LANG_UKR:
				return "Click again, then exit app";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нажмите еще раз для выхода из приложения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Apasati inca odata si iesiti din aplicatie";
			default:
				return "Click again, then exit app";
		}
	}

	//设备类型
	owner.label_devicetype_array = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Thermostat', 'Security'];
			case LANG_CN:
				return ['温控设备', '安防设备'];
			case LANG_UKR:
				return ['Thermostat', 'Security'];
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ['Температура','Сигнализатор газа'];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ['Control temperatura','Detector gaz'];
			default:
				return ['Thermostat', 'Security'];
		}
	}

	//邮箱
	owner.label_email = function(language) {
		switch (language) {
			case LANG_EN:
				return "E-mail";
			case LANG_CN:
				return "邮箱";
			case LANG_UKR:
				return "E-mail";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "E-mail";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "e-mail";
			default:
				return "E-mail";
		}
	}

	//邮箱为空
	owner.label_email_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter E-mail";
			case LANG_CN:
				return "请输入邮箱";
			case LANG_UKR:
				return "Please enter E-mail";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите Email";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti adresa de e-mail";
			default:
				return "Please enter E-mail";
		}
	}

	//邮箱长度太短
	owner.label_email_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "E-mail is too short! The valid length is 5~50";
			case LANG_CN:
				return "邮箱长度太短！有效长度是5~50";
			case LANG_UKR:
				return "E-mail is too short! The valid length is 5~50";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "E-mail слишком короткий. 5-50 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adresa de e-mail este prea scurta (lungimea acceptata are intre 5 si 50 caractere)!";
			default:
				return "E-mail is too short! The valid length is 5~30";
		}
	}

	//邮箱长度太长
	owner.label_email_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "E-mail is too long! The valid length is 5~50";
			case LANG_CN:
				return "邮箱长度太长！有效长度是5~50";
			case LANG_UKR:
				return "E-mail is too long! The valid length is 5~50";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "E-mail слишком длинный. 5-50 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adresa de e-mail este prea lunga (lungimea acceptata are intre 5 si 50 caractere)!";
			default:
				return "E-mail is too long! The valid length is 5~50";
		}
	}

	//密码
	owner.label_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "Password";
			case LANG_CN:
				return "密码";
			case LANG_UKR:
				return "Password";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пароль";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola actuala";
			default:
				return "Password";
		}
	}

	//密码为空
	owner.label_password_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter password";
			case LANG_CN:
				return "请输入密码";
			case LANG_UKR:
				return "Please enter password";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите пароль";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti parola actuala";
			default:
				return "Please enter password";
		}
	}

	//密码太短
	owner.label_password_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Password is too short! The valid length is 3~10";
			case LANG_CN:
				return "密码长度太短！有效长度是3~10";
			case LANG_UKR:
				return "Password is too short! The valid length is 3~10";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пароль слишком короткий. 3-10 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola este prea scurta (lungimea acceptata are intre 3 si 10 caractere)!";
			default:
				return "Password is too short! The valid length is 3~10";
		}
	}

	//密码太长
	owner.label_password_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Password is too long! The valid length is 3~10";
			case LANG_CN:
				return "密码长度太长！有效长度是3~10";
			case LANG_UKR:
				return "Password is too long! The valid length is 3~10";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пароль слишком длинный. 3-10 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola este prea lunga (lungimea acceptata are intre 3 si 10 caractere)!";
			default:
				return "Password is too long! The valid length is 3~10";
		}
	}

	//新密码
	owner.label_new_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "New password";
			case LANG_CN:
				return "新密码";
			case LANG_UKR:
				return "New password";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Новый пароль";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola noua";
			default:
				return "New password";
		}
	}

	//新密码
	owner.label_new_password_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter new password";
			case LANG_CN:
				return "请输入新密码";
			case LANG_UKR:
				return "Please enter new password";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите новый пароль";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti noua parola";
			default:
				return "Please enter new password";
		}
	}

	//新密码太短
	owner.label_newpassword_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "New password is too short! The valid length is 3~10";
			case LANG_CN:
				return "新密码长度太短！有效长度是3~10";
			case LANG_UKR:
				return "New password is too short! The valid length is 3~10";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пароль слишком короткий. 3-10 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola noua este prea scurta (lungimea acceptata are intre 3 si 10 caractere)!";
			default:
				return "New assword is too short! The valid length is 3~10";
		}
	}

	//新密码太长
	owner.label_newpassword_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "New password is too long! The valid length is 3~10";
			case LANG_CN:
				return "新密码长度太长！有效长度是3~10";
			case LANG_UKR:
				return "New password is too long! The valid length is 3~10";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пароль слишком длинный. 3-10 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parola noua este prea lunga (lungimea acceptata are intre 3 si 10 caractere)!";
			default:
				return "New password is too long! The valid length is 3~10";
		}
	}

	//确认密码
	owner.label_confirm_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "Confirm";
			case LANG_CN:
				return "确认密码";
			case LANG_UKR:
				return "Confirm";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подтвердить";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Confirmare parola noua";
			default:
				return "Confirm";
		}
	}

	//确认密码为空
	owner.label_confirm_password_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter confirm password";
			case LANG_CN:
				return "请输入确认密码";
			case LANG_UKR:
				return "Please enter confirm password";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, подтвердите пароль";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Reintroduceti parola noua";
			default:
				return "Please enter confirm password";
		}
	}

	//密码与确认密码不一致
	owner.label_confirm_password_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Password is different from confirm password";
			case LANG_CN:
				return "密码与确认密码不一致";
			case LANG_UKR:
				return "Password is different from confirm password";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Неверный пароль";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parolele introduse difera! Reintroduceti-le corect.";
			default:
				return "Password is different from confirm password";
		}
	}

	//新密码与确认密码不一致
	owner.label_new_confirm_password_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "New password is different from confirm password";
			case LANG_CN:
				return "新密码与确认密码不一致";
			case LANG_UKR:
				return "New password is different from confirm password";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Новый пароль должен отличаться";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parolele introduse difera! Reintroduceti-le corect.";
			default:
				return "New password is different from confirm password";
		}
	}

	//语言
	owner.label_language = function(language) {
		switch (language) {
			case LANG_EN:
				return "Language";
			case LANG_CN:
				return "语言";
			case LANG_UKR:
				return "Language";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Язык";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Selectati limba";
			default:
				return "Language";
		}
	}

	//英语
	owner.label_english = function(language) {
		switch (language) {
			case LANG_EN:
				return "English";
			case LANG_CN:
				return "英语";
			case LANG_UKR:
				return "English";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Английский";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "English";
			default:
				return "English";
		}
	}

	//中文
	owner.label_chinese = function(language) {
		switch (language) {
			case LANG_EN:
				return "chinese";
			case LANG_CN:
				return "中文";
			case LANG_UKR:
				return "chinese";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Китайский";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "chinese";
			default:
				return "chinese";
		}
	}

	//登录
	owner.label_login = function(language) {
		switch (language) {
			case LANG_EN:
				return "Login";
			case LANG_CN:
				return "登录";
			case LANG_UKR:
				return "Login";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Имя пользователя";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Access cont";
			default:
				return "Login";
		}
	}

	//演示登录
	owner.label_demo_login = function(language) {
		switch (language) {
			case LANG_EN:
				return "Demo Login";
			case LANG_CN:
				return "演示登录";
			case LANG_UKR:
				return "Demo Login";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Demo Login";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Cont demonstrativ";
			default:
				return "Demo Login";
		}
	}

	//注册
	owner.label_register = function(language) {
		switch (language) {
			case LANG_EN:
				return "Register";
			case LANG_CN:
				return "注册";
			case LANG_UKR:
				return "Register";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Регистрация";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Creare cont nou";
			default:
				return "Register";
		}
	}

	//注册成功
	owner.label_register_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Register success";
			case LANG_CN:
				return "注册成功";
			case LANG_UKR:
				return "Register success";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Зарегистрирован";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inregistrarea noului cont s-a realizat cu succes!";
			default:
				return "Register success";
		}
	}

	//注册失败
	owner.label_register_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Register failed";
			case LANG_CN:
				return "注册失败";
			case LANG_UKR:
				return "Register failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка регистрации";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inregistrarea noului cont a esuat! Este posibil sa existe deja un cont cu aceasta adresa de e-mail.";
			default:
				return "Register failed";
		}
	}

	//忘记密码
	owner.label_forget_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "Forget Password";
			case LANG_CN:
				return "忘记密码";
			case LANG_UKR:
				return "Forget Password";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Забыли пароль?";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Am uitat parola";
			default:
				return "Forget Password";
		}
	}

	//获取locate失败
	owner.label_get_locate_fail = function(language) {
		switch (language) {
			case LANG_EN:
				return "Get locate list failed";
			case LANG_CN:
				return "获取区域信息失败";
			case LANG_UKR:
				return "Get locate list failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nu s-a reusit obtinerea informatiilor despre zona.";
			default:
				return "Get locate list failed";
		}
	}

	//locate信息错误
	owner.label_locate_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Locate info is error";
			case LANG_CN:
				return "区域信息有误";
			case LANG_UKR:
				return "Locate info is error";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка положения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Informatia despre locatie este incorecta.";
			default:
				return "Locate info is error";
		}
	}

	//登录失败
	owner.label_login_fail = function(language) {
		switch (language) {
			case LANG_EN:
				return "Login failed";
			case LANG_CN:
				return "登录失败";
			case LANG_UKR:
				return "Login failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка имени пользователя";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectare esuata.";
			default:
				return "Login failed";
		}
	}

	//home模式
	owner.label_home = function(language) {
		switch (language) {
			case LANG_EN:
				return "Home";
			case LANG_CN:
				return "在家";
			case LANG_UKR:
				return "Home";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Дома";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Acasa";
			default:
				return "Home";
		}
	}

	//away模式
	owner.label_away = function(language) {
		switch (language) {
			case LANG_EN:
				return "Away";
			case LANG_CN:
				return "离开";
			case LANG_UKR:
				return "Away";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Не дома";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Plecat";
			default:
				return "Away";
		}
	}

	//holiday模式
	owner.label_holiday = function(language) {
		switch (language) {
			case LANG_EN:
				return "Holiday";
			case LANG_CN:
				return "假日";
			case LANG_UKR:
				return "Holiday";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отпуск";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "In vacanta";
			default:
				return "Holiday";
		}
	}

	//off模式
	owner.label_off = function(language) {
		switch (language) {
			case LANG_EN:
				return "Off";
			case LANG_CN:
				return "关闭";
			case LANG_UKR:
				return "Off";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выкл.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inchis";
			default:
				return "Off";
		}
	}

	//override模式
	owner.label_override = function(language) {
		switch (language) {
			case LANG_EN:
				return "Override";
			case LANG_CN:
				return "越控";
			case LANG_UKR:
				return "Override";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Управление";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "<font size='1px'>Program modificat</font>";
			default:
				return "Override";
		}
	}

	//gateway offline模式
	owner.label_gateway_offline = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway offline";
			case LANG_CN:
				return "网关离线";
			case LANG_UKR:
				return "Gateway offline";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз отключен";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway offline";
			default:
				return "Gateway offline";
		}
	}

	//offline模式
	owner.label_offline = function(language) {
		switch (language) {
			case LANG_EN:
				return "Offline";
			case LANG_CN:
				return "离线";
			case LANG_UKR:
				return "Offline";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отключен";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Offline";
			default:
				return "Offline";
		}
	}

	//湿度
	owner.label_humidity = function(language) {
		switch (language) {
			case LANG_EN:
				return "Humidity";
			case LANG_CN:
				return "湿度";
			case LANG_UKR:
				return "Humidity";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Влажность";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Umiditate relativa";
			default:
				return "Humidity";
		}
	}

	//改变工作模式为
	owner.label_change_workmode_to = function(language) {
		switch (language) {
			case LANG_EN:
				return "Change work mode to";
			case LANG_CN:
				return "改变工作模式为";
			case LANG_UKR:
				return "Change work mode to";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Изменить режим на:";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Confirmati modificarea generala a setarilor prin impunerea modului ";
			default:
				return "Change work mode to";
		}
	}

	//Account info
	owner.label_account_info = function(language) {
		switch (language) {
			case LANG_EN:
				return "Account Info";
			case LANG_CN:
				return "账号信息";
			case LANG_UKR:
				return "Account Info";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Личная информация";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Informatii cont";
			default:
				return "Account Info";
		}
	}

	//Name
	owner.label_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Name";
			case LANG_CN:
				return "名称";
			case LANG_UKR:
				return "Name";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Имя";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nume";
			default:
				return "Name";
		}
	}

	//Name empty
	owner.label_name_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter name";
			case LANG_CN:
				return "请输入名称";
			case LANG_UKR:
				return "Please enter name";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите Имя";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti numele";
			default:
				return "Please enter name";
		}
	}

	//名称太短
	owner.label_name_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Name is too short! The valid length is 3~15";
			case LANG_CN:
				return "名称长度太短！有效长度是3~15";
			case LANG_UKR:
				return "Name is too short! The valid length is 3~15";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Имя слишком короткое. 3-15 символов.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numele introdus este prea scurt (lungimea acceptata are intre 3 si 15 caractere)!";
			default:
				return "Name is too short! The valid length is 3~15";
		}
	}

	//名称太长
	owner.label_name_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Name is too long! The valid length is 3~15";
			case LANG_CN:
				return "名称长度太长！有效长度是3~15";
			case LANG_UKR:
				return "Name is too long! The valid length is 3~15";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Имя слишком длинное. 3-15 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numele introdus este prea lung (lungimea acceptata are intre 3 si 15 caractere)!";
			default:
				return "Name is too long! The valid length is 3~15";
		}
	}

	//Country
	owner.label_country = function(language) {
		switch (language) {
			case LANG_EN:
				return "Country";
			case LANG_CN:
				return "国家";
			case LANG_UKR:
				return "Country";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Страана";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tara";
			default:
				return "Country";
		}
	}

	//postcode
	owner.label_postcode = function(language) {
		switch (language) {
			case LANG_EN:
				return "Postcode";
			case LANG_CN:
				return "邮编";
			case LANG_UKR:
				return "Postcode";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Индекс";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Cod postal";
			default:
				return "Postcode";
		}
	}

	//postcode空
	owner.label_postcode_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter postcode";
			case LANG_CN:
				return "请输入邮编";
			case LANG_UKR:
				return "Please enter postcode";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Введите почтовый индекс";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti codul postal";
			default:
				return "Please enter postcode";
		}
	}

	//邮编太短
	owner.label_postcode_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Postcode is too short! The valid length is 5~10";
			case LANG_CN:
				return "邮编长度太短！有效长度是5~10";
			case LANG_UKR:
				return "Postcode is too short! The valid length is 5~10";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Индекс слишком короткий. 5-10 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Codul postal este prea scurt (lungimea acceptata are 6 cifre)!";
			default:
				return "Postcode is too short! The valid length is 5~10";
		}
	}

	//邮编太长
	owner.label_postcode_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Postcode is too long! The valid length is 5~10";
			case LANG_CN:
				return "邮编长度太长！有效长度是5~10";
			case LANG_UKR:
				return "Postcode is too long! The valid length is 5~10";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Индекс слишком длинный. 5~10 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Codul postal este prea lung (lungimea acceptata are 6 cifre)!";
			default:
				return "Postcode is too long! The valid length is 5~10";
		}
	}

	//change password
	owner.label_change_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "Change password";
			case LANG_CN:
				return "修改密码";
			case LANG_UKR:
				return "Change password";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Изменить пароль";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Schimbare parola";
			default:
				return "Change password";
		}
	}

	//logout
	owner.label_logout = function(language) {
		switch (language) {
			case LANG_EN:
				return "Logout";
			case LANG_CN:
				return "退出登录";
			case LANG_UKR:
				return "Logout";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выйти";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Iesire din aplicatie";
			default:
				return "Logout";
		}
	}

	//home setup
	owner.label_home_setup = function(language) {
		switch (language) {
			case LANG_EN:
				return "Home Setup";
			case LANG_CN:
				return "设置";
			case LANG_UKR:
				return "Home Setup";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Информация о доме";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare mod Acasa";
			default:
				return "Home Setup";
		}
	}

	//zone setup
	owner.label_zone_setup = function(language) {
		switch (language) {
			case LANG_EN:
				return "Zone Setting";
			case LANG_CN:
				return "区域设置";
			case LANG_UKR:
				return "Zone Setting";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка зон";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setari locatie";
			default:
				return "Zone Setting";
		}
	}

	//gateway setup
	owner.label_gateway_setup = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway Setup";
			case LANG_CN:
				return "网关设置";
			case LANG_UKR:
				return "Gateway Setup";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setari Gateway";
			default:
				return "Gateway Setup";
		}
	}

	//sn
	owner.label_sn = function(language) {
		switch (language) {
			case LANG_EN:
				return "SN";
			case LANG_CN:
				return "序列号";
			case LANG_UKR:
				return "SN";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сер.№";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Serie";
			default:
				return "SN";
		}
	}

	//软件
	owner.label_software = function(language) {
		switch (language) {
			case LANG_EN:
				return "Softversion";
			case LANG_CN:
				return "软件版本";
			case LANG_UKR:
				return "Softversion";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Версия ПО";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Versiune software";
			default:
				return "Softversion";
		}
	}

	//硬件
	owner.label_hardware = function(language) {
		switch (language) {
			case LANG_EN:
				return "Hardversion";
			case LANG_CN:
				return "硬件版本";
			case LANG_UKR:
				return "Hardversion";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Версия оборудования";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Versiune hardware";
			default:
				return "Hardversion";
		}
	}

	//时区
	owner.label_time_zone = function(language) {
		switch (language) {
			case LANG_EN:
				return "TimeZone";
			case LANG_CN:
				return "时区";
			case LANG_UKR:
				return "TimeZone";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Часовой пояс";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Fus orar";
			default:
				return "TimeZone";
		}
	}

	//device setup
	owner.label_device_setup = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device Setup";
			case LANG_CN:
				return "设备设置";
			case LANG_UKR:
				return "Device Setup";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка устройства";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare generala echipament";
			default:
				return "Device Setup";
		}
	}

	//温控设备
	owner.label_thermostat = function(language) {
		switch (language) {
			case LANG_EN:
				return "Thermostat";
			case LANG_CN:
				return "温控设备";
			case LANG_UKR:
				return "Thermostat";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Терморегулятор";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Termostat";
			default:
				return "Thermostat";
		}
	}

	//温度设置
	owner.label_temperature_set = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temperature Setup";
			case LANG_CN:
				return "温度设置";
			case LANG_UKR:
				return "Temperature Setup";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка температуры";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare generala temperatura";
			default:
				return "Temperature Setup";
		}
	}

	//Away温度
	owner.label_away_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Away Temperature";
			case LANG_CN:
				return "离开温度";
			case LANG_UKR:
				return "Away Temperature";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нет дома Температура";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temp. in modul Plecat";
			default:
				return "Away Temperature";
		}
	}

	//Away温度简写
	owner.label_away_temp_simple = function(language) {
		switch (language) {
			case LANG_EN:
				return "Away Temp.";
			case LANG_CN:
				return "离开温度";
			case LANG_UKR:
				return "Away Temp.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нет дома темп.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temp. in modul Plecat";
			default:
				return "Away Temp";
		}
	}

	//Holiday温度
	owner.label_holiday_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Holiday Temperature";
			case LANG_CN:
				return "假日温度";
			case LANG_UKR:
				return "Holiday Temperature";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Температура отпуск";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temp. in modul In vacanta";
			default:
				return "Holiday Temperature";
		}
	}

	//Off温度
	owner.label_off_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Off Temperature";
			case LANG_CN:
				return "关闭温度";
			case LANG_UKR:
				return "Off Temperature";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "";
			case LANG_BLR:
				return "Температура Выкл.";
			case LANG_ROM:
				return "Temp. in modul Inchis";
			default:
				return "Off Temperature";
		}
	}

	//Off温度简写
	owner.label_off_temp_simple = function(language) {
		switch (language) {
			case LANG_EN:
				return "Off Temp.";
			case LANG_CN:
				return "关闭温度";
			case LANG_UKR:
				return "Off Temp.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выкл. темп.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temp. cu sistemul oprit";
			default:
				return "Off Temp";
		}
	}

	//改变温度
	owner.label_change_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Change temperature";
			case LANG_CN:
				return "改变温度";
			case LANG_UKR:
				return "Change temperature";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Изменение температуры";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Modifica temperatura";
			default:
				return "Change temperature";
		}
	}

	//温度单位设置
	owner.label_tempunit_set = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temperature Unit Setup";
			case LANG_CN:
				return "温度单位设置";
			case LANG_UKR:
				return "Temperature Unit Setup";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Установка температуры";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setarea temperaturii";
			default:
				return "Temperature Unit Setup";
		}
	}

	//摄氏度
	owner.label_centigrade = function(language) {
		switch (language) {
			case LANG_EN:
				return "Centigrade";
			case LANG_CN:
				return "摄氏度";
			case LANG_UKR:
				return "Centigrade";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Цельсий";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Grade Celsius";
			default:
				return "Centigrade";
		}
	}

	//华氏度
	owner.label_fahrenheit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Fahrenheit";
			case LANG_CN:
				return "华氏度";
			case LANG_UKR:
				return "Fahrenheit";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Фаренгейт";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Grade Fahrenheit";
			default:
				return "Fahrenheit";
		}
	}

	//温度单位
	owner.label_temp_unit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temp. Unit";
			case LANG_CN:
				return "温度单位";
			case LANG_UKR:
				return "Temp. Unit";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ед. темп.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temp. se afiseaza in";
			default:
				return "Temp. Unit";
		}
	}

	//feedback
	owner.label_feedback = function(language) {
		switch (language) {
			case LANG_EN:
				return "Feedback";
			case LANG_CN:
				return "反馈";
			case LANG_UKR:
				return "Feedback";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отзывы";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Mesaj catre suport tehnic";
			default:
				return "Feedback";
		}
	}

	//feedback空
	owner.label_feedback_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter feedback info";
			case LANG_CN:
				return "请输入反馈信息";
			case LANG_UKR:
				return "Please enter feedback info";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите отзыв";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti mesajul";
			default:
				return "Please enter feedback info";
		}
	}

	//feedback太短
	owner.label_feedback_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Feedback is too short! The valid length is 10~100";
			case LANG_CN:
				return "内容太短！有效长度在10~100";
			case LANG_UKR:
				return "Feedback is too short! The valid length is 10~100";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отзыв слишком короткий! Допустимая длинна 10-100";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Mesajul este prea scurt (lungimea acceptata are intre 10 si 100 caractere)!";
			default:
				return "Feedback is too short! The valid length is 10~100";
		}
	}

	//feedback太长
	owner.label_feedback_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Feedback is too long! The valid length is 10~100";
			case LANG_CN:
				return "内容太长！有效长度在10~100";
			case LANG_UKR:
				return "Feedback is too long! The valid length is 10~100";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отзыв слишком длинный! Допустимая длинна 10-100";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Mesajul este prea lung (lungimea acceptata are intre 10 si 100 caractere)!";
			default:
				return "Feedback is too long! The valid length is 10~100";
		}
	}

	//device setup
	owner.label_aboutus = function(language) {
		switch (language) {
			case LANG_EN:
				return "About us";
			case LANG_CN:
				return "关于我们";
			case LANG_UKR:
				return "About us";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "О нас";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Despre noi";
			default:
				return "About us";
		}
	}

	//smart home
	owner.label_smart_home = function(language) {
		switch (language) {
			case LANG_EN:
				return "Smart Home";
			case LANG_CN:
				return "智能家居";
			case LANG_UKR:
				return "Smart Home";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Умный дом";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "No Waste POwER";
			default:
				return "Smart Home";
		}
	}

	//Privacy Policy
	owner.label_privacy_policy = function(language) {
		switch (language) {
			case LANG_EN:
				return "Privacy Policy";
			case LANG_CN:
				return "隐私政策";
			case LANG_UKR:
				return "Privacy Policy";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "http://www.poersmart.by <br/> ООО Термосмарт <br/> office@poersmart.by Политика конфиденциальности";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "http://www.poersmart.ro <br/>Adaptarea in limba Romana (ver. 5.4) de<br/>cristiandan@poersmart.ro";
			default:
				return "Privacy Policy";
		}
	}

	//Privacy Policy
	owner.label_copyright = function(language) {
		switch (language) {
			case LANG_EN:
				return "Copyright ©2015 POER All Rights Reserved.";
			case LANG_CN:
				return "版权归POER所有";
			case LANG_UKR:
				return "Copyright ©2015 POER All Rights Reserved.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "©2015 POER, Все права защищены";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Copyright ©2015~2025 POER<br/>Toate drepturile rezervate.";
			default:
				return "Copyright ©2015 POER All Rights Reserved.";
		}
	}

	//Privacy Policy
	owner.label_version = function(language) {
		switch (language) {
			case LANG_EN:
				return "Ver";
			case LANG_CN:
				return "版本";
			case LANG_UKR:
				return "Ver";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Версия";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Versiune ";
			default:
				return "Ver";
		}
	}

	//忘记密码提交成功
	owner.label_forget_password_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Submit success, please check your email";
			case LANG_CN:
				return "提交成功，请查收邮件";
			case LANG_UKR:
				return "Submit success, please check your email";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отправлено. Проверьте свой email";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Trimiterea parolei a fost efectuata cu succes. Verificati-va e-mail-ul in cateva minute.";
			default:
				return "Submit success, please check your email";
		}
	}

	//忘记密码提交失败
	owner.label_forget_password_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Submit failed";
			case LANG_CN:
				return "提交失败";
			case LANG_UKR:
				return "Submit failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Передача не удалась";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adresa de e-mail necunoscuta. Trimiterea parolei a esuat!";
			default:
				return "Submit failed";
		}
	}

	//current
	owner.label_current = function(language) {
		switch (language) {
			case LANG_EN:
				return "Current";
			case LANG_CN:
				return "当前";
			case LANG_UKR:
				return "Current";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Текущ.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temperatura actuala";
			default:
				return "Current";
		}
	}

	//target
	owner.label_target = function(language) {
		switch (language) {
			case LANG_EN:
				return "Target";
			case LANG_CN:
				return "目标";
			case LANG_UKR:
				return "Target";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Цель";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temperatura dorita";
			default:
				return "Target";
		}
	}

	//Electricity
	owner.label_electricity = function(language) {
		switch (language) {
			case LANG_EN:
				return "Electricity";
			case LANG_CN:
				return "电量";
			case LANG_UKR:
				return "Electricity";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Электричество";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Incarcare";
			default:
				return "Electricity";
		}
	}

	//Hold until
	owner.label_holduntil = function(language) {
		switch (language) {
			case LANG_EN:
				return "Hold Until";
			case LANG_CN:
				return "持续到";
			case LANG_UKR:
				return "Hold Until";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Установить температуру до";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temp. dorita se mentine pana la ora:";
			default:
				return "Hold Until";
		}
	}

	//Press for options
	owner.label_btn_press = function(language) {
		switch (language) {
			case LANG_EN:
				return "Press for Options";
			case LANG_CN:
				return "点击更多操作";
			case LANG_UKR:
				return "Press for Options";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нажать для настроек";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Apasa pentru optiuni";
			default:
				return "Press for Options";
		}
	}

	//Following Schedule
	owner.label_follow_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Following Schedule";
			case LANG_CN:
				return "按编程曲线执行";
			case LANG_UKR:
				return "Following Schedule";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Следующее расписание";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora urmatoarei modificari a temperaturii";
			default:
				return "Following Schedule";
		}
	}

	//Schedule
	owner.label_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Schedule";
			case LANG_CN:
				return "编程";
			case LANG_UKR:
				return "Schedule";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Расписание";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Program";
			default:
				return "Schedule";
		}
	}

	//Copy Schedule
	owner.label_copy_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Schedule Copy";
			case LANG_CN:
				return "编程拷贝";
			case LANG_UKR:
				return "Schedule Copy";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Скопировать расписание";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Copiere program";
			default:
				return "Schedule Copy";
		}
	}

	//update Schedule
	owner.label_update_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update Schedule?";
			case LANG_CN:
				return "更新编程?";
			case LANG_UKR:
				return "Update Schedule?";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Обновить расписание?";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Confirmati actualizarea programului?";
			default:
				return "Update Schedule?";
		}
	}

	//node not exist
	owner.label_node_noexist = function(language) {
		switch (language) {
			case LANG_EN:
				return "There is no this device";
			case LANG_CN:
				return "该设备不存在";
			case LANG_UKR:
				return "There is no this device";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отсутствующее устройство";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipament lipsa";
			default:
				return "There is no this device";
		}
	}

	//gateway not exist
	owner.label_gateway_noexist = function(language) {
		switch (language) {
			case LANG_EN:
				return "There is no this gateway";
			case LANG_CN:
				return "该网关不存在";
			case LANG_UKR:
				return "There is no this gateway";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отсутствует шлюз";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway lipsa";
			default:
				return "There is no this gateway";
		}
	}

	//schedule info error
	owner.label_schedule_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Schedule info is error";
			case LANG_CN:
				return "编程信息错误";
			case LANG_UKR:
				return "Schedule info is error";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка в расписании";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Programare eronata";
			default:
				return "Schedule info is error";
		}
	}

	//cann't override
	owner.label_cannot_override = function(language) {
		switch (language) {
			case LANG_EN:
				return "Just in override or home workmode can do override";
			case LANG_CN:
				return "当前模式不支持越控";
			case LANG_UKR:
				return "Just in override or home workmode can do override";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Управление возможно только в режиме управления или Дома";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Controlul este posibil numai in modul Acasa";
			default:
				return "Just in override or home workmode can do override";
		}
	}

	//override time error
	owner.label_override_time_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Override time must be bigger than current time";
			case LANG_CN:
				return "越控时间必须大于当前时间";
			case LANG_UKR:
				return "Override time must be bigger than current time";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время управления должно быть позже текущего";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Timpul de setat trebuie sa fie mai mare decat cel prezent";
			default:
				return "Override time must be bigger than current time";
		}
	}

	//deviceinfo
	owner.label_deviceinfo = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device Info";
			case LANG_CN:
				return "设备信息";
			case LANG_UKR:
				return "Device Info";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Информация об устройстве";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Info echipament";
			default:
				return "Device Info";
		}
	}

	//set location
	owner.label_set_location = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location Set";
			case LANG_CN:
				return "位置设置";
			case LANG_UKR:
				return "Location Set";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ввод расположения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare locatie";
			default:
				return "Location Set";
		}
	}

	//location
	owner.label_location = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location";
			case LANG_CN:
				return "位置";
			case LANG_UKR:
				return "Location";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Расположение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Locatie";
			default:
				return "Location";
		}
	}

	//location 空
	owner.label_location_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter location";
			case LANG_CN:
				return "请输入位置信息";
			case LANG_UKR:
				return "Please enter location";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста введите расположение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti locatia";
			default:
				return "Please enter location";
		}
	}

	//location长度太短
	owner.label_location_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location is too short! The valid length is 3~20";
			case LANG_CN:
				return "位置信息长度太短！有效长度是3~20";
			case LANG_UKR:
				return "Location is too short! The valid length is 3~20";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Слишком близкое расположение! Рекомендуется от 3 до 20";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Locatia este prea scurta (lungimea acceptata are intre 3 si 20 caractere)!";
			default:
				return "Location is too short! The valid length is 3~20";
		}
	}

	//location长度太长
	owner.label_location_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location is too long! The valid length is 3~20";
			case LANG_CN:
				return "位置信息长度太长！有效长度是3~20";
			case LANG_UKR:
				return "Location is too long! The valid length is 3~20";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "";
			case LANG_BLR:
				return "Слишком далекое расположение! Рекомендуется от 3 до 20";
			case LANG_ROM:
				return "Locatia este prea lunga (lungimea acceptata are intre 3 si 20 caractere)!";
			default:
				return "Location is too long! The valid length is 3~20";
		}
	}

	//gateway id
	owner.label_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway";
			case LANG_CN:
				return "网关";
			case LANG_UKR:
				return "Gateway";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway";
			default:
				return "Gateway";
		}
	}

	//battery
	owner.label_battery = function(language) {
		switch (language) {
			case LANG_EN:
				return "Battery";
			case LANG_CN:
				return "电量";
			case LANG_UKR:
				return "Battery";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Батарея";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Incarcare baterie";
			default:
				return "Battery";
		}
	}

	//weekday
	owner.label_weekday = function(language) {
		switch (language) {
			case LANG_EN:
				return "Weekday";
			case LANG_CN:
				return "工作日";
			case LANG_UKR:
				return "Weekday";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "";
			case LANG_BLR:
				return "День недели";
			case LANG_ROM:
				return "Zi din saptamana";
			default:
				return "Weekday";
		}
	}

	//start time
	owner.label_start_time = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Time";
			case LANG_CN:
				return "开始时间";
			case LANG_UKR:
				return "Start Time";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время начала";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Data si ora de inceput:";
			default:
				return "Start Time";
		}
	}

	//end time
	owner.label_end_time = function(language) {
		switch (language) {
			case LANG_EN:
				return "End Time";
			case LANG_CN:
				return "结束时间";
			case LANG_UKR:
				return "End Time";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время окончания";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Data si ora de sfarsit:";
			default:
				return "Enssd Time";
		}
	}

	//temperature
	owner.label_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temperature";
			case LANG_CN:
				return "温度";
			case LANG_UKR:
				return "Temperature";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Температура";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temperatura";
			default:
				return "Temperature";
		}
	}

	//start time hour error
	owner.label_starttime_hourerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "The hour of start time is error! The valid range is 0~24";
			case LANG_CN:
				return "开始时间的小时数据有误!有效范围是0~24";
			case LANG_UKR:
				return "The hour of start time is error! The valid range is 0~24";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка! Время начала указывается от 0 до 24";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora este invalida! Ora trebuie sa fie intre 0 si 24!";
			default:
				return "The hour of start time is error! The valid range is 0~24";
		}
	}

	//start time minute error
	owner.label_starttime_minuteerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "The minute of start time must be 0 or 30!";
			case LANG_CN:
				return "开始时间的分钟数据必须是0或30";
			case LANG_UKR:
				return "The minute of start time must be 0 or 30!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Минуты начала должны быть 0 или 30!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Minutul este invalid! Minutul trebuie sa fie 0 sau 30!";
			default:
				return "The minute of start time must be 0 or 30!";
		}
	}

	//end time hour error
	owner.label_endtime_hourerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "The hour of end time is error! The valid range is 0~24";
			case LANG_CN:
				return "结束时间的小时数据有误!有效范围是0~24";
			case LANG_UKR:
				return "The hour of end time is error! The valid range is 0~24";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка! Время окончания указывается от 0 до 24";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora este invalida! Ora trebuie sa fie intre 0 si 24!";
			default:
				return "The hour of end time is error! The valid range is 0~24";
		}
	}

	//end time minute error
	owner.label_endtime_minuteerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "The minute of end time must be 0 or 30!";
			case LANG_CN:
				return "结束时间的分钟数据必须是0或30";
			case LANG_UKR:
				return "The minute of end time must be 0 or 30!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Минуты окончания должны быть 0 или 30!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Minutul este invalid! Minutul trebuie sa fie 0 sau 30!";
			default:
				return "The minute of end time must be 0 or 30!";
		}
	}

	//end time <start time
	owner.label_start_end_time_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "End time must be bigger than start time";
			case LANG_CN:
				return "结束时间必须大于开始时间";
			case LANG_UKR:
				return "End time must be bigger than start time";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время окончания должно быть позже времени начала";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Timpul de sfarsit trebuie sa fie mai mare decat cel de start";
			default:
				return "End time must be bigger than start time";
		}
	}

	//temperature error
	owner.label_temperature_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The temperature is error! The valid range is ";
			case LANG_CN:
				return "温度错误! 有效范围是";
			case LANG_UKR:
				return "The temperature is error! The valid range is ";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка температуры! Разрешенный показатель:";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Temperatura este invalida! Intervalul corect este ";
			default:
				return "The temperature is error! The valid range is ";
		}
	}

	//start time too big
	owner.label_starttime_toobig = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start time can not be bigger than 24:00!";
			case LANG_CN:
				return "开始时间不能大于24:00";
			case LANG_UKR:
				return "Start time can not be bigger than 24:00!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время начала не может быть позже 24:00!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora de inceput nu poate fi mai mare ca 24:00!";
			default:
				return "Start time can not be bigger than 24:00!";
		}
	}

	//end time too big
	owner.label_endtime_toobig = function(language) {
		switch (language) {
			case LANG_EN:
				return "End time can not be bigger than 24:00!";
			case LANG_CN:
				return "结束时间不能大于24:00";
			case LANG_UKR:
				return "End time can not be bigger than 24:00!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время окончания не может быть позже 24:00!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora de sfarsit nu poate fi mai mare ca 24:00";
			default:
				return "End time can not be bigger than 24:00!";
		}
	}

	//first point error
	owner.label_firstpoint_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The first time point must be 0:00!";
			case LANG_CN:
				return "第一个时间节点必须是0:00";
			case LANG_UKR:
				return "The first time point must be 0:00!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Первая возможная установка времени 0:00!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Prima setare de temperatura trebuie sa fie de la ora 0:00!";
			default:
				return "The first time point must be 0:00!";
		}
	}

	//end point error
	owner.label_endpoint_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The last time point must be 24:00!";
			case LANG_CN:
				return "最后一个节点必须是24:00";
			case LANG_UKR:
				return "The last time point must be 24:00!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Последняя возможная установка времени 24:00!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ultima setare de temperatura trebuie sa fie de la ora 24:00!";
			default:
				return "The last time point must be 24:00!";
		}
	}

	//point max
	owner.label_timepoint_max = function(language) {
		switch (language) {
			case LANG_EN:
				return "The max number of time points is 13!";
			case LANG_CN:
				return "最多支持13个编程时间节点";
			case LANG_UKR:
				return "The max number of time points is 13!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Максимально 13 установок времени";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numarul maxim de setari intr-o zi este de 13";
			default:
				return "The max number of the points is 13!";
		}
	}

	//point max
	owner.label_firstpoint_delete = function(language) {
		switch (language) {
			case LANG_EN:
				return "The first time point can not be deleted!";
			case LANG_CN:
				return "第一个时间节点不能被删除";
			case LANG_UKR:
				return "The first time point can not be deleted!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Первая точка времени не может быть удалена!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Prima setare de temperatura nu poate fi stearsa!";
			default:
				return "The first time point can not be deleted!";
		}
	}

	//周一到周日
	owner.label_weekday_array = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			case LANG_CN:
				return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
			case LANG_UKR:
				return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
			default:
				return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		}
	}

	//add device
	owner.label_add_device = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Device";
			case LANG_CN:
				return "添加设备";
			case LANG_UKR:
				return "Add Device";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подключить устройство";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adauga echipamente in sistem";
			default:
				return "Add Device";
		}
	}

	//Add Thermostat
	owner.label_add_thermostat = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Thermostat";
			case LANG_CN:
				return "添加温控器";
			case LANG_UKR:
				return "Add Thermostat";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подключить термостат";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Termostat";
			default:
				return "Add Thermostat";
		}
	}

	//Add Gateway
	owner.label_add_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Gateway";
			case LANG_CN:
				return "添加网关";
			case LANG_UKR:
				return "Add Gateway";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подключить Шлюз";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway";
			default:
				return "Add Gateway";
		}
	}

	//thermostat_tip
	owner.label_thermostat_tip = function(language) {
		switch (language) {
			case LANG_EN:
				return "Scan device ID on the device's back.If any trouble on scanning, " + "you may type the ID manually.";
			case LANG_CN:
				return "扫描设备背面的设备ID号。如果扫描遇到问题，您可以手动输入ID号。";
			case LANG_UKR:
				return "Scan device ID on the device's back.If any trouble on scanning, " + "you may type the ID manually.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сканируйте ID на обратной стороне устройства. Если не удается, " + "вы можете ввести ID вручную.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Scanati codul de bare de pe spatele echipamentului. Daca nu reusiti puteti sa il introduceti manual.";
			default:
				return "Scan device ID on the device's back.If any trouble on scanning, " + "you may type the ID manually.";
		}
	}

	//Add product success
	owner.label_addproduct_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add device success";
			case LANG_CN:
				return "添加设备成功";
			case LANG_UKR:
				return "Add device success";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Устройство успешно добавлено";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipamentul a fost adaugat cu succes!";
			default:
				return "Add device success";
		}
	}

	//Add product fail
	owner.label_addproduct_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device is offline,please make sure device is in power, and closer to gateway" + ".Device will online after in power.";
			case LANG_CN:
				return "设备未上线。请确认设备已上电，并靠近网关。设备将自动上线。";
			case LANG_UKR:
				return "Device is offline,please make sure device is in power, and closer to gateway" + ".Device will online after in power.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Устройство не подключено. Пожалуйста, убедитесь, что устройство подключено к эл.питанию и достаточно близко к Шлюзу";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipamentul este offline. Asigurati-va ca echipamentul este conectat la priza si in apropierea Gateway-ului" +" Echipamentul va reveni online dupa conectarea la priza";
			default:
				return "Device is offline,please make sure device is in power, and closer to gateway" + ".Device will online after in power.";
		}
	}

	//mac empty
	owner.label_mac_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter deviceid";
			case LANG_CN:
				return "请输入设备ID";
			case LANG_UKR:
				return "Please enter deviceid";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Введите ID устройства";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti codul echipamentului";
			default:
				return "Please enter deviceid";
		}
	}

	//mac error
	owner.label_mac_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The deviceid is start with 'FCE892'";
			case LANG_CN:
				return "请确保设备ID前六位为: 'FCE892'";
			case LANG_UKR:
				return "The deviceid is start with 'FCE892'";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "ID устройств начинается с 'FCE892'";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Codul echipamentului incepe cu FCE892...";
			default:
				return "The deviceid is start with 'FCE892'";
		}
	}

	//mac short
	owner.label_mac_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "The length of the deviceid is 6 or 12";
			case LANG_CN:
				return "设备ID长度是6位或者12位";
			case LANG_UKR:
				return "The length of the deviceid is 6 or 12";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Длинна ID устройства от 6 до 12 знаков";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Lungimea codului este de 6 sau 12 caractere";
			default:
				return "The length of the deviceid is 6 or 12";
		}
	}

	//check device
	owner.label_check_device = function(language) {
		switch (language) {
			case LANG_EN:
				return "Adding Device ...";
			case LANG_CN:
				return "添加设备中 ...";
			case LANG_UKR:
				return "Adding Device ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Добавить устройство ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se adauga echipamentul...";
			default:
				return "Adding Device ...";
		}
	}

	//connect
	owner.label_connect = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connect";
			case LANG_CN:
				return "连接";
			case LANG_UKR:
				return "Connect";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Соединить";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectare";
			default:
				return "Connect";
		}
	}

	//scan
	owner.label_scan = function(language) {
		switch (language) {
			case LANG_EN:
				return "Scan";
			case LANG_CN:
				return "扫描";
			case LANG_UKR:
				return "Scan";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сканмровать";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Scanare";
			default:
				return "Scan";
		}
	}

	//set
	owner.label_set = function(language) {
		switch (language) {
			case LANG_EN:
				return "Set";
			case LANG_CN:
				return "设置";
			case LANG_UKR:
				return "Set";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выбор";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setare noua";
			default:
				return "Set";
		}
	}

	//check
	owner.label_check = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check";
			case LANG_CN:
				return "检查";
			case LANG_UKR:
				return "Check";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверка";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verificat";
			default:
				return "Check";
		}
	}

	//status
	owner.label_status = function(language) {
		switch (language) {
			case LANG_EN:
				return "Status";
			case LANG_CN:
				return "状态";
			case LANG_UKR:
				return "Status";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Состояние";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Status";
			default:
				return "Status";
		}
	}

	//gateway_tip one
	owner.label_gateway_tip_one = function(language) {
		switch (language) {
			case LANG_EN:
				return "Scan device ID on the device's back. If any trouble on scanning, " + "you may type the ID manually.";
			case LANG_CN:
				return "扫描设备背面的ID。如果扫描遇到问题，你可以手动输入ID。";
			case LANG_UKR:
				return "Scan device ID on the device's back. If any trouble on scanning, " + "you may type the ID manually.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сканируйте ID на обратной стороне устройства. Если не удается, " + "вы можете ввести ID вручную.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Scanati codul de bare de pe spatele echipamentului. Daca nu reusiti puteti sa il introduceti manual.";
			default:
				return "Scan device ID on the device's back. If any trouble on scanning, " + "you may type the ID manually.";
		}
	}

	//next step
	owner.label_next_step = function(language) {
		switch (language) {
			case LANG_EN:
				return "Next Step";
			case LANG_CN:
				return "下一步";
			case LANG_UKR:
				return "Next Step";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Далее";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Pasul urmator";
			default:
				return "Next Step";
		}
	}

	//gateway_tip two top
	owner.label_gateway_tip_two_top = function(language) {
		switch (language) {
			case LANG_EN:
				return "Be sure the gateway was installed and powered in right way.Flashing Led " + "means it is ready for Wi-Fi connection.";
			case LANG_CN:
				return "确认网关已经安装并正常上电。Led灯闪意味着网关已经准备好连接Wi-Fi了。";
			case LANG_UKR:
				return "Be sure the gateway was installed and powered in right way.Flashing Led " + "means it is ready for Wi-Fi connection.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Убедитесь, что шлюз вставлен в розетку. Зажженный LED индикатор " + " означает готовность подключения к WiFi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Asigurati-va ca Gateway-ul este instalat corespunzator si alimentat de la priza. Clipitul intermitent, rapid al LEDului" + "inseamna ca este gata pentru conectarea Wi-Fi.";
			default:
				return "Be sure the gateway was installed and powered in right way.Flashing Led " + "means it is ready for Wi-Fi connection.";
		}
	}

	//gateway_tip two bottom
	owner.label_gateway_tip_two_bottom = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please back to App. once gateway's Wi-Fi connected.";
			case LANG_CN:
				return "一旦网关Wi-Fi连接后，请返回App。";
			case LANG_UKR:
				return "Please back to App. once gateway's Wi-Fi connected.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Вернитесь в приложение, если шлюз подключен к WiFi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa va reintoarceti in aplicatie dupa conectarea Gateway-ului.";
			default:
				return "Please back to App. once gateway's Wi-Fi connected.";
		}
	}

	//label connected ap
	owner.label_connected_ap = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway connected? then go for next!";
			case LANG_CN:
				return "网关已连接?下一步!";
			case LANG_UKR:
				return "Gateway connected? then go for next!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз зарегистрирован? Перейдите далее!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "S-a conectat Gateway-ul? Treceti la pasul urmator";
			default:
				return "Gateway connected? then go for next!";
		}
	}

	//wifi empty
	owner.label_wifi_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter wifi";
			case LANG_CN:
				return "请输入WIFI账号";
			case LANG_UKR:
				return "Please enter wifi";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите WiFi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti numele retelei de Wi-Fi";
			default:
				return "Please enter wifi";
		}
	}

	//gateway_tip three
	owner.label_gateway_tip_three = function(language) {
		switch (language) {
			case LANG_EN:
				return "Register gateway on wireless router by typing your Wi-Fi name and password.";
			case LANG_CN:
				return "输入你的Wi-Fi账号和密码，在无线路由上注册网关。";
			case LANG_UKR:
				return "Register gateway on wireless router by typing your Wi-Fi name and password.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Зарегистрируйте Шлюз в сети WiFi. Введите название и пароль домашней сети WiFi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Permiteti accesul Gateway-ului la reteaua Wi-Fi prin introducerea numelui retelei si a parolei de acces.";
			default:
				return "Register gateway on wireless router by typing your Wi-Fi name and password.";
		}
	}

	//gateway_tip four
	owner.label_gateway_tip_four = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please connect route's Wi-Fi. Back to App, once route's Wi-Fi connected." + "Check gateway connection again before adding devices on App.";
			case LANG_CN:
				return "请连接路由Wi-Fi,连接后请返回App.添加设备之前需要检查网关连接状态.";
			case LANG_UKR:
				return "Please connect route's Wi-Fi. Back to App, once route's Wi-Fi connected." + "Check gateway connection again before adding devices on App.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста подключитесь к Wi-Fi. Вернитесь в приложение после подключения к Wifi." + " Проверьте подключение шлюза перед добавлением устройств";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa va reintoarceti in aplicatie dupa conectarea Gateway-ului." + "Verificati conectarea Gateway-ului la reteaua Wi-Fi inaintea adaugarii unui echipament nou.";
			default:
				return "Please connect route's Wi-Fi. Back to App, once route's Wi-Fi connected." + "Check gateway connection again before adding devices on App.";
		}
	}

	//connect network
	owner.label_connect_network = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connect route Wi-Fi";
			case LANG_CN:
				return "连接路由Wi-Fi";
			case LANG_UKR:
				return "Connect route Wi-Fi";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подключить WiFi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectare la reteaua Wi-Fi";
			default:
				return "Connect route Wi-Fi";
		}
	}

	//label check gateway connection
	owner.label_check_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check Gateway Connection";
			case LANG_CN:
				return "检查网关连接";
			case LANG_UKR:
				return "Check Gateway Connection";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверьте соединение со Шлюзом";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verificati conectarea Gateway-ului la reteaua Wi-Fi";
			default:
				return "Check Gateway Connection";
		}
	}

	//send wifi failed
	owner.label_sendwifi_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Send wifi info to gateway failed";
			case LANG_CN:
				return "发送wifi信息到网关失败";
			case LANG_UKR:
				return "Send wifi info to gateway failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка передачи данных WiFi в шлюз ";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea Gateway-ului la reteaua Wi-Fi, esuata!";
			default:
				return "Send wifi info to gateway failed";
		}
	}

	//bind gateway success
	owner.label_bindgateway_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway registration succeed!";
			case LANG_CN:
				return "网关注册成功!";
			case LANG_UKR:
				return "Gateway registration succeed!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз зарегистрирован!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adaugarea Gateway-ului la reteaua Wi-Fi, reusita!";
			default:
				return "Gateway registration succeed!";
		}
	}

	//bind gateway failed
	owner.label_bindgateway_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway is offline. Please move a little closer to gateway";
			case LANG_CN:
				return "网关未上线。请靠近网关一点。";
			case LANG_UKR:
				return "Gateway is offline. Please move a little closer to gateway";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз недоступен. Уменьшите рассояние до шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea la Gateway, esuata! Va rugam sa apropiati echipamentul de Gateway!";
			default:
				return "Gateway is offline. Please move a little closer to gateway";
		}
	}

	//valve_normal
	owner.label_valve_normal = function(language) {
		switch (language) {
			case LANG_EN:
				return "Valve Normal";
			case LANG_CN:
				return "阀门正常";
			case LANG_UKR:
				return "Valve Normal";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Клапан в порядке";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Valva este deschisa. Gazele functioneaza normal!";
			default:
				return "Valve Normal";
		}
	}

	//valve_close
	owner.label_valve_close = function(language) {
		switch (language) {
			case LANG_EN:
				return "Valve Close";
			case LANG_CN:
				return "阀门关闭";
			case LANG_UKR:
				return "Valve Close";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Клапан закрыт";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inchidere electrovalva";
			default:
				return "Valve Close";
		}
	}

	//danger
	owner.label_danger = function(language) {
		switch (language) {
			case LANG_EN:
				return "Danger";
			case LANG_CN:
				return "危险";
			case LANG_UKR:
				return "Danger";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Опасность";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "ATENTIE! SCAPARI DE GAZE!";
			default:
				return "Danger";
		}
	}

	//danger desc
	owner.label_danger_desc = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gas lesking detected!";
			case LANG_CN:
				return "探测到燃气泄漏!";
			case LANG_UKR:
				return "Gas lesking detected!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Обнаружена утечка газа!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Au fost detectate scapari in alimentarea cu gaz!";
			default:
				return "Gas lesking detected!";
		}
	}

	//safe
	owner.label_safe = function(language) {
		switch (language) {
			case LANG_EN:
				return "Safety";
			case LANG_CN:
				return "安全";
			case LANG_UKR:
				return "Safety";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сохранить";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "OK";
			default:
				return "Safety";
		}
	}
	owner.label_safe_desc = function(language) {
		switch (language) {
			case LANG_EN:
				return "Equipment normal!";
			case LANG_CN:
				return "设备正常！";
			case LANG_UKR:
				return "Equipment normal!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Устройства в порядке!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipamentul este in stare de functionare normala.";
			default:
				return "Equipment normal!";
		}
	}
	owner.label_danger_message = function(language) {
		switch (language) {
			case LANG_EN:
				return "All Clear";
			case LANG_CN:
				return "临时解除";
			case LANG_UKR:
				return "All Clear";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Очистить все";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "A fost detectata o scapare de gaz acasa! Intrati in casa cu precautie, fara a fuma, iar inainte de a aprinde lumina sau alte echipamente electrice, ventilati bine incaperile! Pentru repornire, apelati la Serviciul de Urgente gaze naturale al furnizorului dvs. de gaze!";
			default:
				return "All Clear";
		}
	}
	owner.label_btn_all_clear = function(language) {
		switch (language) {
			case LANG_EN:
				return "All Clear";
			case LANG_CN:
				return "临时解除";
			case LANG_UKR:
				return "All Clear";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Очистить все";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Atentie gaze detectate";
			default:
				return "All Clear";
		}
	}
	owner.label_btn_help = function(language) {
		switch (language) {
			case LANG_EN:
				return "Help";
			case LANG_CN:
				return "求救";
			case LANG_UKR:
				return "Help";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Помощь";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ajutor";
			default:
				return "Help";
		}
	}
	owner.label_data_statistics = function(language) {
		switch (language) {
			case LANG_EN:
				return "Data Statistics";
			case LANG_CN:
				return "数据统计";
			case LANG_UKR:
				return "Data Statistics";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Статистика";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Date statistice";
			default:
				return "Data Statistics";
		}
	}
	owner.label_alerm_record = function(language) {
		switch (language) {
			case LANG_EN:
				return "Alarm Record";
			case LANG_CN:
				return "报警记录";
			case LANG_UKR:
				return "Alarm Record";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Журнал ошибок";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inregistrarile alarmelor";
			default:
				return "Alarm Record";
		}
	}
	owner.label_equipment_number = function(language) {
		switch (language) {
			case LANG_EN:
				return "Equipment Number";
			case LANG_CN:
				return "设备编号";
			case LANG_UKR:
				return "Equipment Number";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Номер устройства";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numarul echipamentului";
			default:
				return "Equipment Number";
		}
	}
	owner.label_gas_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gas Name";
			case LANG_CN:
				return "气体名称";
			case LANG_UKR:
				return "Gas Name";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Газ";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Locatia detectorului de gaz";
			default:
				return "Gas Name";
		}
	}

	//close valve confirm
	owner.label_close_valve_confirm = function(language) {
		switch (language) {
			case LANG_EN:
				return "Must manually open the valve is closed, you sure you want to close the valve?";
			case LANG_CN:
				return "阀门关闭后，需要手动打开。确认关闭阀门吗？";
			case LANG_UKR:
				return "Must manually open the valve is closed, you sure you want to close the valve?";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Потребуется открывать клапан вручную! Вы уверены, что хотите закрыть клапан?";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Doriti inchiderea valvei? Odata inchisa, aceasta se poate deschide doar manual!";
			default:
				return "Must manually open the valve is closed, you sure you want to close the valve?";
		}
	}

	//Update Now
	owner.label_update_now = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update";
			case LANG_CN:
				return "更新";
			case LANG_UKR:
				return "Update";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Обновить";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Actualizare";
			default:
				return "Update";
		}
	}

	//download file
	owner.label_download_file = function(language) {
		switch (language) {
			case LANG_EN:
				return "Download File";
			case LANG_CN:
				return "下载文件";
			case LANG_UKR:
				return "Download File";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Загрузить файл";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Descarca fisier";
			default:
				return "Download File";
		}
	}

	//download failed
	owner.label_download_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Download failed";
			case LANG_CN:
				return "下载失败";
			case LANG_UKR:
				return "Download failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка загрузки";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Descarcare esuata!";
			default:
				return "Download failed";
		}
	}

	//install
	owner.label_install = function(language) {
		switch (language) {
			case LANG_EN:
				return "Install";
			case LANG_CN:
				return "安装";
			case LANG_UKR:
				return "Install";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Установить";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Instalare...";
			default:
				return "Install";
		}
	}

	//install success
	owner.label_install_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Install success, reboot now!";
			case LANG_CN:
				return "更新成功，即将重启!";
			case LANG_UKR:
				return "Install success, reboot now!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Установлено, требуется перезагрузка";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Instalarea aplicatiei a reusit! Reporniti aplicatia inaintea utilizarii.";
			default:
				return "Install success, reboot now!";
		}
	}

	//install failed
	owner.label_install_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Install failed";
			case LANG_CN:
				return "安装失败";
			case LANG_UKR:
				return "Install failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка установки";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Instalare esuata!";
			default:
				return "Install failed";
		}
	}

	//link ap failed
	owner.label_link_ap_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connect gateway failed, please connect wifi";
			case LANG_CN:
				return "连接网关失败，请连接wifi。";
			case LANG_UKR:
				return "Connect gateway failed, please connect wifi";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка соединения шлюза. Пожалуйста подключитесь к wifi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea Gateway-ului a esuat! Va rugam sa reincercati conectarea la reteaua Wi-Fi!";
			default:
				return "Connect gateway failed,please connect wifi ";
		}
	}

	//link wrong ap
	owner.label_link_wrong_ap = function(language) {
		switch (language) {
			case LANG_EN:
				return "You have linked another wifi.Please link ";
			case LANG_CN:
				return "您连接了另一个wifi。请连接：";
			case LANG_UKR:
				return "You have linked another wifi.Please link ";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Вы соединились с другой Wifi сетью";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "V-ati conectat la o alta retea Wi-Fi! Va rugam sa va conectati la ";
			default:
				return "You have linked another wifi.Please link ";
		}
	}

	//link wifi failed
	owner.label_link_wifi_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Your phone dosn't link network.Please change your wifi.";
			case LANG_CN:
				return "您的手机不能上网。请改变你的wifi。";
			case LANG_UKR:
				return "Your phone dosn't link network.Please change your wifi.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ваш телефон не соединен с сетью. Пожалуйста смените Wifi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Telefonul nu se poate conecta la aceasta retea. Va rugam sa schimbati reteaua si sa incercati din nou!";
			default:
				return "Your phone dosn't link network.Please change your wifi.";
		}
	}

	//ap link wifi error2
	owner.label_linkwifi_error2 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Link wifi failed";
			case LANG_CN:
				return "连接wifi失败。";
			case LANG_UKR:
				return "Link wifi failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка WiFi соединения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea la reteaua Wi-Fi a esuat!";
			default:
				return "Link wifi failed";
		}
	}

	//ap link wifi error3   成功
	owner.label_linkwifi_error3 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Link wifi success.";
			case LANG_CN:
				return "连接wifi成功。";
			case LANG_UKR:
				return "Link wifi success.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка WiFi соединения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea la reteaua Wi-Fi a reusit!";
			default:
				return "Link wifi success.";
		}
	}

	//ap link wifi error4
	owner.label_linkwifi_error4 = function(language) {
		switch (language) {
			case LANG_EN:
				return "The configuration of the wifi is error";
			case LANG_CN:
				return "wifi配置信息错误。";
			case LANG_UKR:
				return "The configuration of the wifi is error";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка настроек wifi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configuratia de acces la reteaua Wi-Fi este eronata!";
			default:
				return "The configuration of the wifi is error";
		}
	}

	//ap link wifi error6
	owner.label_linkwifi_error6 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Unable to resolve DNS server";
			case LANG_CN:
				return "无法解析服务器DNS。";
			case LANG_UKR:
				return "Unable to resolve DNS server";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Невозможно подключиться к DNS серверу";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Imposibil de rezolvat DNS server!";
			default:
				return "Unable to resolve DNS server";
		}
	}

	//choose weekday
	owner.label_choose_weekday = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please choose weekday";
			case LANG_CN:
				return "请选择日期。";
			case LANG_UKR:
				return "Please choose weekday";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выберите день недели";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa alegeti ziua din saptamana.";
			default:
				return "Please choose weekday";
		}
	}

	//deviceid
	owner.label_deviceid = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device ID";
			case LANG_CN:
				return "设备ID";
			case LANG_UKR:
				return "Device ID";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "ID устройства";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Seria echipamentului";
			default:
				return "Device ID";
		}
	}

	//config
	owner.label_config = function(language) {
		switch (language) {
			case LANG_EN:
				return "Config";
			case LANG_CN:
				return "配置";
			case LANG_UKR:
				return "Config";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configurare";
			default:
				return "Config";
		}
	}

	//check ap status
	owner.label_check_ap_status = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check gateway link network status";
			case LANG_CN:
				return "检查网关联网状态";
			case LANG_UKR:
				return "Check gateway link network status";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверка соединения шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "In curs de conectare cu Gateway-ul...";
			default:
				return "Check gateway link network status";
		}
	}

	//check gateway status
	owner.label_check_gateway_status = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check gateway back status";
			case LANG_CN:
				return "检查网关返回状态";
			case LANG_UKR:
				return "Check gateway back status";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверка обратной связи со шлюзом";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "In curs de conectare cu Gateway-ul...";
			default:
				return "Check gateway back status";
		}
	}

	//check gateway status fail
	owner.label_check_gateway_status_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check gateway back status failed";
			case LANG_CN:
				return "检查网关返回状态失败";
			case LANG_UKR:
				return "Check gateway back status failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка обратной связи со шлюзом";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea Gateway-ului la serverul central a esuat!";
			default:
				return "Check gateway back status failed";
		}
	}

	//check gateway status fail
	owner.label_gateway_notreceive = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway doesn't receive the command to add device";
			case LANG_CN:
				return "网关未接收到添加设备信息";
			case LANG_UKR:
				return "Gateway doesn't receive the command to add device";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Шлюз не получает команду на добавление устройства";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway-ul nu primeste comanda de a adauga un echipament nou!";
			default:
				return "Gateway doesn't receive the command to add device";
		}
	}

	//type id manually
	owner.label_type_id_manually = function(language) {
		switch (language) {
			case LANG_EN:
				return "Type device ID manually";
			case LANG_CN:
				return "手动输入设备ID";
			case LANG_UKR:
				return "Type device ID manually";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ввести вручную ID устройства";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti manual seria";
			default:
				return "Type device ID manually";
		}
	}

	//label step3
	owner.label_step3 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Registration";
			case LANG_CN:
				return "开始注册";
			case LANG_UKR:
				return "Start Registration";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Регистрация";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Incepeti inregistrarea";
			default:
				return "Start Registration";
		}
	}

	//add_radiator
	owner.label_add_radiator = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Radiator Controller";
			case LANG_CN:
				return "添加温控阀";
			case LANG_UKR:
				return "Add Radiator Controller";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Добавить радиаторный термостат";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Termostat de Radiator";
			default:
				return "Add Radiator Controller";
		}
	}

	//add_gas_detector
	owner.label_add_gas_detector = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Gas Detector";
			case LANG_CN:
				return "添加燃气传感器";
			case LANG_UKR:
				return "Add Gas Detector";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Добавить синализатор газа";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Detector de Gaz";
			default:
				return "Add Gas Detector";
		}
	}

	//delete
	owner.label_delete = function(language) {
		switch (language) {
			case LANG_EN:
				return "Delete";
			case LANG_CN:
				return "删除";
			case LANG_UKR:
				return "Delete";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Удаление";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Sterge";
			default:
				return "Delete";
		}
	}

	//cancel hold
	owner.label_cancelhold = function(language) {
		switch (language) {
			case LANG_EN:
				return "Cancel Hold";
			case LANG_CN:
				return "取消越控";
			case LANG_UKR:
				return "Cancel Hold";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Отмена удержания";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Asteapta cu anularea";
			default:
				return "Cancel Hold";
		}
	}

	//label zone
	owner.label_zone = function(language) {
		switch (language) {
			case LANG_EN:
				return "Zone";
			case LANG_CN:
				return "区域";
			case LANG_UKR:
				return "Zone";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Зона";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Locatia";
			default:
				return "Zone";
		}
	}

	//label time
	owner.label_time = function(language) {
		switch (language) {
			case LANG_EN:
				return "Time";
			case LANG_CN:
				return "时间";
			case LANG_UKR:
				return "Time";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora";
			default:
				return "Time";
		}
	}

	//删除成功
	owner.label_delete_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Delete succeed";
			case LANG_CN:
				return "删除成功";
			case LANG_UKR:
				return "Delete succeed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Удалено";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Stergere reusita!";
			default:
				return "Delete succeed";
		}
	}

	//删除失败
	owner.label_delete_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Delete failed";
			case LANG_CN:
				return "删除失败";
			case LANG_UKR:
				return "Delete failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка удаления";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Stergere esuata!";
			default:
				return "Delete failed";
		}
	}

	// 标题
	owner.label_content_title = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gas Concentration Alarm Set [unit:%]";
			case LANG_CN:
				return "燃气报警浓度设定【单位：%】";
			case LANG_UKR:
				return "Gas Concentration Alarm Set [unit:%]";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Концентрация газа для тревоги";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nivelul de Concentratie de gaz de la care se activeaza alarma: [unit:%]";
			default:
				"Gas Concentration Alarm Set [Unit:%]";
		}
	}

	// 手动输入
	owner.label_manual_input = function(language) {
		switch (language) {
			case LANG_EN:
				return "Manual Input";
			case LANG_CN:
				return "手动输入";
			case LANG_UKR:
				return "Manual Input";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ручной ввод";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introducere manuala";
			default:
				return "Manual Input";
		}
	}

	//
	owner.label_generator = function(language) {
		switch (language) {
			case LANG_EN:
				return "Generator";
			case LANG_CN:
				return "发电";
			case LANG_UKR:
				return "Generator";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Генератор";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Incarcare electrotermica";
			default:
				return "Generator";
		}
	}

	//radiator
	owner.label_radiator = function(language) {
		switch (language) {
			case LANG_EN:
				return "Radiator Controller";
			case LANG_CN:
				return "温控阀";
			case LANG_UKR:
				return "Radiator Controller";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Радиаторный термостат";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Termostat de Radiator";
			default:
				return "Radiator Controller";
		}
	}

	//energy save
	owner.label_energy_save = function(language) {
		switch (language) {
			case LANG_EN:
				return "Energy Saving";
			case LANG_CN:
				return "节能";
			case LANG_UKR:
				return "Energy Saving";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Экономия энергии";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Economie energie";
			default:
				return "Energy Saving";
		}
	}

	// 手动微调
	owner.label_manual_fine = function(language) {
		switch (language) {
			case LANG_EN:
				return "Manual Fine";
			case LANG_CN:
				return "手动微调";
			case LANG_UKR:
				return "Manual Fine";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ручная точная";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Reglaj manual fin";
			default:
				return "Manual Fine";
		}
	}
	owner.label_check_by_self = function(language) {
		switch (language) {
			case LANG_EN:
				return "Self-Test";
			case LANG_CN:
				return "自检";
			case LANG_UKR:
				return "Self-Test";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Самодиагностика";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Auto-test";
			default:
				return "Self-Test";
		}
	}
	owner.label_concentration = function(language) {
		switch (language) {
			case LANG_EN:
				return "Concentration";
			case LANG_CN:
				return "浓度";
			case LANG_UKR:
				return "Concentration";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Концентрация";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Concentratie gaz";
			default:
				return "Concentration";
		}
	}
	owner.label_alerm_valve_value = function(language) {
		switch (language) {
			case LANG_EN:
				return "Alarm Point";
			case LANG_CN:
				return "告警阀值";
			case LANG_UKR:
				return "Alarm Point";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Точка тревоги";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Limita de alarma";
			default:
				return "Alarm Point";
		}
	}
	owner.label_get_gas_valve_info_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Get Gas valve info failed!";
			case LANG_CN:
				return "获取燃气阀信息失败!";
			case LANG_UKR:
				return "Get Gas valve info failed!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Не удалось получить информацию газового клапана";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Preluarea statusului valvei de oprire gaz, esuata!";
			default:
				return "Get Gas valve info failed!";
		}
	}
	owner.label_buzzer = function(language) {
		switch (language) {
			case LANG_EN:
				return "Buzzer:";
			case LANG_CN:
				return "蜂鸣器:";
			case LANG_UKR:
				return "Buzzer:";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Зуммер";				
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Sirena avertizare:";
			default:
				return "Buzzer:";
		}
	}
	owner.label_empty_set_valve_value = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please input the alerm valve value!";
			case LANG_CN:
				return "请输入告警阀！";
			case LANG_UKR:
				return "Please input the alerm valve value!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, введите значение для тревоги клапана!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti limita de declansare a electrovalvei: ";
			default:
				return "Please input the alerm valve value!";
		}
	}
	owner.label_valve_openstatus = function(language) {
		switch (language) {
			case LANG_EN:
				return "Valve open status";
			case LANG_CN:
				return "阀开度";
			case LANG_UKR:
				return "Valve open status";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Состояние клапана";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Status deschidere valva radiator";
			default:
				return "Valve open status";
		}
	}
	owner.label_check_gateway_online = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check whether there is online gateway in the location";
			case LANG_CN:
				return "检查当前区域内是否有网关在线";
			case LANG_UKR:
				return "Check whether there is online gateway in the location";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверьте наличие подключенного шлюза поблизости";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verifica existenta vreunui Gateway online in locatie!";
			default:
				return "Check whether there is online gateway in the location";
		}
	}
	owner.label_no_gateway_online = function(language) {
		switch (language) {
			case LANG_EN:
				return "There is no online gateway";
			case LANG_CN:
				return "没有在线网关";
			case LANG_UKR:
				return "There is no online gateway";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Нет подключенного шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "In zona nu se afla niciun Gateway online!";
			default:
				return "There is no online gateway";
		}
	}

	//energy info error
	owner.label_energy_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Energy info is error";
			case LANG_CN:
				return "能耗信息错误";
			case LANG_UKR:
				return "Energy info is error";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка информации";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Informatia despre energie este eronata!";
			default:
				return "Energy info is error";
		}
	}

	//能量消耗
	owner.label_energy_consume = function(language) {
		switch (language) {
			case LANG_EN:
				return "Energy Consume";
			case LANG_CN:
				return "能量消耗";
			case LANG_UKR:
				return "Energy Consume";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Потребление энергии";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Consumul de energie";
			default:
				return "Energy Consume";
		}
	}

	//能量消耗
	owner.label_energy_type = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Total', 'RfEnergy', 'MotorEnergy', 'StandByEnergy', 'OtherEnergy'];
			case LANG_CN:
				return ['消耗总计', '通讯耗能', '执行耗能', '系统耗能', '其他耗能'];
			case LANG_UKR:
				return ['Total', 'RfEnergy', 'MotorEnergy', 'StandByEnergy', 'OtherEnergy'];
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ['Всего', 'Радиосигнал', 'Энергия', 'Режим ожидания', 'Прочее'];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ['Total', 'RfEnergy', 'MotorEnergy', 'StandByEnergy', 'OtherEnergy'];
			default:
				return ['Total', 'RfEnergy', 'MotorEnergy', 'StandByEnergy', 'OtherEnergy'];
		}
	}

	//edit
	owner.label_edit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Edit";
			case LANG_CN:
				return "编辑";
			case LANG_UKR:
				return "Edit";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Редактировать";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Editeaza";
			default:
				return "Edit";
		}
	}

	//no choose locate
	owner.label_no_choose_locate = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please choose a locate";
			case LANG_CN:
				return "请选择区域";
			case LANG_UKR:
				return "Please choose a locate";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выберите местоположение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa selectati o locatie.";
			default:
				return "Please choose a locate";
		}
	}

	//locate name
	owner.label_locate_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Locate Name";
			case LANG_CN:
				return "区域名称";
			case LANG_UKR:
				return "Locate Name";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Название местоположения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numele locatiei";
			default:
				return "Locate Name";
		}
	}

	//locate name empty
	owner.label_locate_name_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter locate name";
			case LANG_CN:
				return "请输入区域名称";
			case LANG_UKR:
				return "Please enter locate name";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Введите название местоположения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti numele locatiei";
			default:
				return "Please enter locate name";
		}
	}

	//locate name short
	owner.label_locate_name_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Locate name is too short! The valid length is 2~20";
			case LANG_CN:
				return "区域名称太短!有效长度是2~20";
			case LANG_UKR:
				return "Locate name is too short! The valid length is 2~20";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Название местоположения слишком короткое. 2-20 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numele locatiei este prea scurt (lungimea acceptata are intre 2 si 20 caractere).";
			default:
				return "Locate name is too short! The valid length is 2~20";
		}
	}

	//locate name long
	owner.label_locate_name_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Locate name is too long! The valid length is 2~20";
			case LANG_CN:
				return "区域名称太长!有效长度是2~20";
			case LANG_UKR:
				return "Locate name is too long! The valid length is 2~20";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Название местоположения слишком длинное. 2-20 символов";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Numele locatiei este prea lung (lungimea acceptata are intre 2 si 20 caractere).";
			default:
				return "Locate name is too long! The valid length is 2~20";
		}
	}

	//add fail
	owner.label_add_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add failed";
			case LANG_CN:
				return "添加失败";
			case LANG_UKR:
				return "Add failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка добавления";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adaugare esuata!";
			default:
				return "Add failed";
		}
	}

	//can't delete default locate
	owner.label_not_delete_default_locate = function(language) {
		switch (language) {
			case LANG_EN:
				return "Can not delete default locate";
			case LANG_CN:
				return "不能删除默认区域";
			case LANG_UKR:
				return "Can not delete default locate";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Невозможно удалить расположение по умолчанию";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Locatia implicita nu poate fi stearsa.";
			default:
				return "Can not delete default locate";
		}
	}

	//can't delete locate
	owner.label_not_delete_locate = function(language) {
		switch (language) {
			case LANG_EN:
				return "Can not delete the locate which has some gateways";
			case LANG_CN:
				return "不能删除拥有网关的区域";
			case LANG_UKR:
				return "Can not delete the locate which has some gateways";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Невозможно удалить расположение соответствующее Шлюзу";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nu poate fi stearsa o locatie cu Gateway-uri declarate in acea locatie.";
			default:
				return "Can not delete the locate which has some gateways";
		}
	}

	//set timezone
	owner.label_set_timezone = function(language) {
		switch (language) {
			case LANG_EN:
				return "Set gateway's timezone";
			case LANG_CN:
				return "设置网关时区信息";
			case LANG_UKR:
				return "Set gateway's timezone";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выберите часовой пояс шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Setati fusul orar pentru Gateway";
			default:
				return "Set gateway's timezone";
		}
	}
	owner.array_datetime_picker_labels = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Y', 'M', 'D', 'H', 'Mi'];
			case LANG_CN:
				return ['年', '月', '日', '时', '分'];
			case LANG_UKR:
				return ['Y', 'M', 'D', 'H', 'Mi'];
			case LANG_BLR:
				return "";
			case LANG_RUS:
				return ['Г', 'М', 'Д', 'Ч', 'Мин'];
			case LANG_ROM:
				return ['An', 'Luna', 'Zi', 'Ora', 'Min'];
			default:
				return ['Y', 'M', 'D', 'H', 'Mi'];
		}
	}
	owner.array_confirm_buttons = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Cancel', 'OK'];
			case LANG_CN:
				return ['取消', '确定'];
			case LANG_UKR:
				return ['Cancel', 'OK'];				
			case LANG_BLR:
				return "";
			case LANG_RUS:
				return ['Отмена', 'OK'];
			case LANG_ROM:
				return ['Anulare', 'OK']
			default:
				return ['Cancel', 'OK'];
		}
	}
	owner.label_energy_good = function(language) {
		switch (language) {
			case LANG_EN:
				return "Good";
			case LANG_CN:
				return "良";
			case LANG_UKR:
				return "Good";				
			case LANG_BLR:
				return "";
			case LANG_RUS:
				return "ЕСО";
			case LANG_ROM:
				return "MAX";
			default:
				return "Good";
		}
	}
	owner.msg_connect_to_wifi_first = function(language) {
		switch (language) {
			case LANG_EN:
				return "Phone is not connected to a wireless network, connect to a wireless network after the operation";
			case LANG_CN:
				return "手机未连接到无线网络，请连接到无线网络后再操作";
			case LANG_UKR:
				return "Phone is not connected to a wireless network, connect to a wireless network after the operation";				
			case LANG_RUS:
				return "Телефон не подключен к беспроводной сети, подключите к беспроводной сети";
			case LANG_BLR:
				return "";			
			case LANG_ROM:
				return "Telefonul nu este conectat la reteaua Wi-Fi din locatia selectata. Reincercati dupa conectarea la reteaua Wi-Fi din locatia selectata.";
			default:
				return "Phone is not connected to a wireless network, connect to a wireless network after the operation";
		}
	}
	owner.msg_connection_unknow = function(language) {
		switch (language) {
			case LANG_EN:
				return "Current network connection status is unknown, check the network connection";
			case LANG_CN:
				return "当前网络连接状态未知，请检查网络连接";
			case LANG_UKR:
				return "Current network connection status is unknown, check the network connection";				
			case LANG_RUS:
				return "Неизвестный статус соединения, проверьте сетевое соединение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Statusul conectarii la retea este necunoscut. Verificati conectarea la retea.";
			default:
				return "Current network connection status is unknown, check the network connection";
		}
	}
	owner.msg_connection_none = function(language) {
		switch (language) {
			case LANG_EN:
				return "The network is not connected, check the network connection";
			case LANG_CN:
				return "网络未连接，请检查网络连接";
			case LANG_UKR:
				return "The network is not connected, check the network connection";				
			case LANG_RUS:
				return "Сеть недоступна, проверьте сетевое подключение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Reteaua nu este conectata. Verificati conectarea la retea.";
			default:
				return "The network is not connected, check the network connection";
		}
	}
	owner.msg_connection_ethernet = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to a wired network";
			case LANG_CN:
				return "网络已切换为有线网络";
			case LANG_UKR:
				return "Network has been switched to a wired network";				
			case LANG_RUS:e
				return "Сеть подключена";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea de cablu...";
			default:
				return "Network has been switched to a wired network";
		}
	}
	owner.msg_connection_cell2G = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to 2G";
			case LANG_CN:
				return "网络已切换为蜂窝数据2G";
			case LANG_UKR:
				return "Network has been switched to 2G";				
			case LANG_RUS:
				return "Подключено к сети 2G";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea mobila 2G.";
			default:
				return "Network has been switched to 2G";
		}
	}
	owner.msg_connection_cell3G = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to 3G";
			case LANG_CN:
				return "网络已切换为蜂窝数据3G";
			case LANG_UKR:
				return "Network has been switched to 3G";				
			case LANG_RUS:
				return "Подключено к сети 3G";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea mobila 3G.";
			default:
				return "Network has been switched to 3G";
		}
	}
	owner.msg_connection_cell4G = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to 4G";
			case LANG_CN:
				return "网络已切换为蜂窝数据4G";
			case LANG_UKR:
				return "Network has been switched to 4G";				
			case LANG_RUS:
				return "Подключено к сети 4G";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea mobila 4G.";
			default:
				return "Network has been switched to 4G";
		}
	}
	owner.msg_connection_wifi = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to the radio signal";
			case LANG_CN:
				return "网络已切换为无线信号";
			case LANG_UKR:
				return "Network has been switched to the radio signal";				
			case LANG_RUS:
				return "Подключено к радиосигналу";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea Wi-Fi!";
			default:
				return "Network has been switched to WIFI";
		}
	}
	owner.title_auto_config = function(language) {
		switch (language) {
			case LANG_EN:
				return "Auto Configuration";
			case LANG_CN:
				return "一键配置";
			case LANG_UKR:
				return "Auto Configuration";				
			case LANG_RUS:
				return "Автоматическая настройка";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Autoconfigurare";
			default:
				return "Auto Configuration";
		}
	}
	owner.label_wifi_signal = function(language) {
		switch (language) {
			case LANG_EN:
				return "WIFI signal";
			case LANG_CN:
				return "WIFI 信号";
			case LANG_UKR:
				return "WIFI signal";				
			case LANG_RUS:
				return "Сигнал Wifi";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nivel semnal Wi-Fi";
			default:
				return "WIFI signal";
		}
	}
	owner.label_gateway_mac = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway mac";
			case LANG_CN:
				return "网关mac";
			case LANG_UKR:
				return "Gateway mac";				
			case LANG_RUS:
				return "MAC Шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Mac-ul Gateway-ului";
			default:
				return "Gateway mac";
		}
	}
	owner.label_start_config = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Configuration";
			case LANG_CN:
				return "开始配置";
			case LANG_UKR:
				return "Start Configuration";				
			case LANG_RUS:
				return "Начало настройки";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Pornire configurare";
			default:
				return "Start Configuration";
		}
	}
	owner.label_config_title_start = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Configuration ...";
			case LANG_CN:
				return "开始配置 ...";
			case LANG_UKR:
				return "Start Configuration ...";				
			case LANG_RUS:
				return "Начало настройки...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Interconectare in curs...";
			default:
				return "Start Configuration ...";
		}
	}
	owner.label_config_title = function(language) {
		switch (language) {
			case LANG_EN:
				return "Configuring ...";
			case LANG_CN:
				return "配置中 ...";
			case LANG_UKR:
				return "Configuring ...";				
			case LANG_RUS:
				return "Настройка...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se configureaza...";
			default:
				return "Configuring ...";
		}
	}
	owner.msg_gateway_connection_timeout = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway connection timeout";
			case LANG_CN:
				return "网关连接超时";
			case LANG_UKR:
				return "Gateway connection timeout";				
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ожидание подключения шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Timpul alocat pentru conectarea Gateway-ului a expirat.";
			default:
				return "Gateway connection timeout";
		}
	}
	owner.msg_gateway_connection_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway connection failed";
			case LANG_CN:
				return "网关连接超时";
			case LANG_UKR:
				return "Gateway connection failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка подключения шлюза";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea Gateway-ului a esuat!";
			default:
				return "Gateway connection failed";
		}
	}
	owner.msg_connecting_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connecting Gateway ...";
			case LANG_CN:
				return "连接网关 ...";
			case LANG_UKR:
				return "Connecting Gateway ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Соединение со Шлюзом";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectare Gateway...";
			default:
				return "Connecting Gateway ...";
		}
	}
	owner.msg_obtaining_ip_address = function(language) {
		switch (language) {
			case LANG_EN:
				return "Obtaining IP address ...";
			case LANG_CN:
				return "正在获取IP地址 ...";
			case LANG_UKR:
				return "Obtaining IP address ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Получение IP-адреса ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Obtinere adresa IP...";
			default:
				return "Obtaining IP address ...";
		}
	}
	owner.msg_gateway_connection_status_checked = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway connection status is being checked ...";
			case LANG_CN:
				return "验证网关连接状态 ...";
			case LANG_UKR:
				return "Gateway connection status is being checked ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Состояние подключения шлюза проверяется ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se verifica statusul conectarii Gateway-ului...";
			default:
				return "Gateway connection status is being checked ...";
		}
	}
	owner.msg_configuring_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Configuring Gateway ...";
			case LANG_CN:
				return "配置网关 ...";
			case LANG_UKR:
				return "Configuring Gateway ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка шлюза ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Gateway-ul se configureaza...";
			default:
				return "Configuring Gateway ...";
		}
	}
	owner.msg_checking_for_gateway_networking_state = function(language) {
		switch (language) {
			case LANG_EN:
				return "Checking for Gateway networking state ...";
			case LANG_CN:
				return "验证网关联网状态 ...";
			case LANG_UKR:
				return "Checking for Gateway networking state ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Проверка сетевого состояния шлюза ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return " Se verifica statusul retelei proprii a Gateway-ului...";
			default:
				return "Checking for Gateway networking state ...";
		}
	}
	owner.msg_connecting_wifi = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connecting WIFI ...";
			case LANG_CN:
				return "连接WIFI ...";
			case LANG_UKR:
				return "Connecting WIFI ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Подключение к сети Wifi ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se conecteaza la reteaua Wi-Fi...";
			default:
				return "Connecting WIFI ...";
		}
	}
	owner.msg_start_verify_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start verification gateway ...";
			case LANG_CN:
				return "开始验证网关 ...";
			case LANG_UKR:
				return "Start verification gateway ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Начало проверки шлюза ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se verifica functionarea Gateway-ului...";
			default:
				return "Start verification gateway ...";
		}
	}
	owner.msg_get_information_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Get Information Gateway ...";
			case LANG_CN:
				return "获取网关信息 ...";
			case LANG_UKR:
				return "Get Information Gateway ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Получение информации ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se primesc informatii actualizate de la Gateway...";
			default:
				return "Get Information Gateway ...";
		}
	}
	owner.msg_being_successful_gateway_info = function(language) {
		switch (language) {
			case LANG_EN:
				return "Being successful gateway information ...";
			case LANG_CN:
				return "获取网关信息成功 ...";
			case LANG_UKR:
				return "Being successful gateway information ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Получение информации ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se primesc informatii de la Gateway...";
			default:
				return "Being successful gateway information ...";
		}
	}
	owner.msg_start_bind_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Bind Gateway ...";
			case LANG_CN:
				return "开始绑定网关 ...";
			case LANG_UKR:
				return "Start Bind Gateway ...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Запустите привязку шлюза ...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se incepe comunicarea cu Gateway-ul...";
			default:
				return "Start Bind Gateway ...";
		}
	}
	owner.msg_wifi_connected_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "WIFI connection failed";
			case LANG_CN:
				return "连接WIFI失败";
			case LANG_UKR:
				return "WIFI connection failed";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка Wifi соединения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conexiunea cu reteaua Wi-Fi, esuata!";
			default:
				return "WIFI connection failed";
		}
	}
	owner.msg_friendly_reminder = function(language) {
		switch (language) {
			case LANG_EN:
				return "Try to make your router, mobile phones and devices closer to each other.";
			case LANG_CN:
				return "尽量使您的路由器、手机和设备互相靠近。";
			case LANG_UKR:
				return "Try to make your router, mobile phones and devices closer to each other.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Пожалуйста, разместите Ваши роутер, смартфон и устройства ближе друг к другу";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Apropiati telefonul, routerul si echipamentele!";
			default:
				return "Try to make your router, mobile phones and devices closer to each other.";
		}
	}
	owner.msg_configuration_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Configuration is successful";
			case LANG_CN:
				return "配置成功";
			case LANG_UKR:
				return "Configuration is successful";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Настройка завершена";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configurarea a reusit!";
			default:
				return "Configuration is successful";
		}
	}
	owner.msg_configuration_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Configuration failed!\ntry once again!";
			case LANG_CN:
				return "配置失败\n请重新尝试一次！";
			case LANG_UKR:
				return "Configuration failed!\ntry once again!";				
			case LANG_RUS:
				return "Configuration failed!\ntry once again!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configurarea a esuat. \n Reincercati din nou!";
			default:
				return "Configuration failed!\ntry once again!";
		}
	}
	owner.array_button_array_yes_or_no = function(language) {
		switch (language) {
			case LANG_EN:
				return ['No', 'Yes'];
			case LANG_CN:
				return ['否', '是'];
			case LANG_UKR:
				return ['No', 'Yes'];
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ['Нет', 'Да'];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ['Nu', 'Da']
			default:
				return ['No', 'Yes'];
		}
	}
	owner.title_precautions = function(language) {
		switch (language) {
			case LANG_EN:
				return "Precautions";
			case LANG_CN:
				return "注意事项";
			case LANG_UKR:
				return "Precautions";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Предостережение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "PoerSmart";
			default:
				return "Precautions";
		}
	}
	owner.msg_configuration_confirm = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please conform following issues before adding gateway: \n1. make sure gateway under Paring Mode(LED blink slowly); \n2. make sure  mobile phone is connected with 2.4G Wi-Fi;\n3. make sure Wi-Fi account and password is correct; \n4. make sure strange Mac ID is not forbided by your wireless router;    \n5. make sure gateway has not been set the AP isolation; \n6. the recommended visible distance between wireless router and gateway is 2M; continue paring cancle paring.";
			case LANG_CN:
				return "配对前请确认：\n1.您的网关设备已进入自动配对模式（LED灯慢速闪烁）。\n2.您手机连接的wifi网络处于2.4g的频段。\n3.您选择的wifi及输入连接wifi的密码是正确的。\n4.您的路由器没有禁止陌生mac地址接入。\n5.您的路由器没有设置AP隔离。\n6.建议网关与无线路由器之间的可视距离不超过2M.\n点击“是”进行配对，点击“否”取消配对。";
			case LANG_UKR:
				return "Please conform following issues before adding gateway: \n1. make sure gateway under Paring Mode(LED blink slowly); \n2. make sure  mobile phone is connected with 2.4G Wi-Fi;\n3. make sure Wi-Fi account and password is correct; \n4. make sure strange Mac ID is not forbided by your wireless router;    \n5. make sure gateway has not been set the AP isolation; \n6. the recommended visible distance between wireless router and gateway is 2M; continue paring cancle paring.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Please conform following issues before adding gateway: \n1. make sure gateway under Paring Mode(LED blink slowly); \n2. make sure  mobile phone is connected with 2.4G Wi-Fi;\n3. make sure Wi-Fi account and password is correct; \n4. make sure strange Mac ID is not forbided by your wireless router;    \n5. make sure gateway has not been set the AP isolation; \n6. the recommended visible distance between wireless router and gateway is 2M; continue paring cancle paring.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Va rugam sa verificati: \n1. ca Gateway-ul a intrat in procedura de interconectare (LEDul clipeste lent, intermitent); \n2. ca telefonul mobil este conectat la reteaua Wi-Fi din locatia selectata, in banda de 2.4GHz (802.11 b/g); \n3. ca ati introdus parola corecta pentru accessul in reteaua Wi-Fi; \n4. ca nu aveti restrictii declarate in setarile router-ului vizavi de blocarea conectarii unor device-uri (blocarea unor adrese MAC); \n5. ca modul “AP Isolation” nu este activ pe router-ul dvs.; \n6. ca distanta intre Gateway si router-ul wireless sa fie pe durata interconectarii de 1-3m si fara obstacole intre cele 2 echipamente. \n Continuati?";
			default:
				return "Please conform following issues before adding gateway: \n1. make sure gateway under Paring Mode(LED blink slowly); \n2. make sure  mobile phone is connected with 2.4G Wi-Fi;\n3. make sure Wi-Fi account and password is correct; \n4. make sure strange Mac ID is not forbided by your wireless router;    \n5. make sure gateway has not been set the AP isolation; \n6. the recommended visible distance between wireless router and gateway is 2M; continue paring cancle paring.";
		}
	}
	owner.msg_repower_try_again = function(language) {
		switch (language) {
			case LANG_EN:
				return "After re-power your device and try again.";
			case LANG_CN:
				return "请将设备重新上电后重试。";
			case LANG_UKR:
				return "After re-power your device and try again.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "После перезагрузки устройства, попробуйте еще раз";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Dupa restartul echipamentelor incercati din nou.";
			default:
				return "After re-power your device and try again.";
		}
	}
	owner.msg_loging = function(language) {
		switch (language) {
			case LANG_EN:
				return "logging in...";
			case LANG_CN:
				return "登录中...";
			case LANG_UKR:
				return "logging in...";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Вход в систему...";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Se conecteaza...";
			default:
				return "logging in...";
		}
	}
	owner.msg_sel_end_time_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Select the end time is incorrect!";
			case LANG_CN:
				return "结束时间选择有误!";
			case LANG_UKR:
				return "Select the end time is incorrect!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выбранное время окончания неверно!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ora de sfarsit este incorecta!";
			default:
				return "Select the end time is incorrect!";
		}
	}
	owner.msg_mac_must_to_be_hex = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device ID must consist of the following characters (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F).";
			case LANG_CN:
				return "设备ID必须由以下字符组成（0，1，2，3，4，5，6，7，8，9，A，B，C，D，E，F）。";
			case LANG_UKR:
				return "Device ID must consist of the following characters (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F).";				
			case LANG_RUS:
				return "ID устройства должно содержать символы (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F).";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Seria echipamentului este compusa din caracterele 0-9, A-F";
			default:
				return "Device ID must consist of the following characters (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F).";
		}
	}
	owner.msg_week_device_need_wait = function(language, times) {
		switch (language) {
			case LANG_EN:
				return "The device is in deep sleep, wake up the device to wait about " + times + " minutes.";
			case LANG_CN:
				return "设备处于深度睡眠状态，唤醒设备大约需要等待" + times + "分钟的时间。";
			case LANG_UKR:
				return "The device is in deep sleep, wake up the device to wait about " + times + " minutes.";				
			case LANG_RUS:
				return "Устройство в режиме ожидания,и ожидайте " + times + " минут.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Echipamentul are functiile oprite. Pentru repornirea functiilor aveti de asteptat cateva minute.";
			default:
				return "The device is in deep sleep, wake up the device to wait about " + times + " minutes.";
		}
	}
	owner.msg_press_again_to_exit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Press again to exit the application";
			case LANG_CN:
				return "再按一次退出应用";
			case LANG_UKR:
				return "Press again to exit the application";				
			case LANG_RUS:
				return "Нажмите еще раз для выхода из приложения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Apasati inca odata pentru a iesi din aplicatie";
			default:
				return "Press again to exit the application";
		}
	}
	owner.msg_confirm_logout = function(language) {
		switch (language) {
			case LANG_EN:
				return "OK Log out?";
			case LANG_CN:
				return "确定退出登录？";
			case LANG_UKR:
				return "OK Log out?";				
			case LANG_RUS:
				return "Выйти?";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Parasiti aplicatia?";
			default:
				return "OK Log out?";
		}
	}
	owner.msg_demo_can_not_add = function(language) {
		switch (language) {
			case LANG_EN:
				return "DEMO account can not add the device!";
			case LANG_CN:
				return "DEMO 账号不支持设备添加！";
			case LANG_UKR:
				return "DEMO account can not add the device!";				
			case LANG_RUS:
				return "В Демо режиме невозможно добавить устройство";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Contul de demonstrativ nu permite adaugarea echipamentelor!";
			default:
				return "DEMO account can not add the device!";
		}
	}
	owner.msg_has_none_changed = function(language) {
		switch (language) {
			case LANG_EN:
				return "You have not done any changes, no need to submit!";
			case LANG_CN:
				return "未修改配置项，无须提交！";
			case LANG_UKR:
				return "You have not done any changes, no need to submit!";				
			case LANG_RUS:
				return "Вы не сделали изменений, нет необходимости в подтверждении";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Nu ati modificat nimic si de aceea nicio informatie nu a fost transmisa.";
			default:
				return "You have not done any changes, no need to submit!";
		}
	}
	owner.label_name_preparationg = function(language) {
		switch (language) {
			case LANG_EN:
				return "Preparation";
			case LANG_CN:
				return "准备";
			case LANG_UKR:
				return "Preparation";				
			case LANG_RUS:
				return "Подготовка";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Pregatire";
			default:
				return "Preparation";
		}
	}
	owner.label_name_wifi_connection = function(language) {
		switch (language) {
			case LANG_EN:
				return "Wi-Fi Connection";
			case LANG_CN:
				return "Wi-Fi连接";
			case LANG_UKR:
				return "Wi-Fi Connection";				
			case LANG_RUS:
				return "Wi-Fi соединение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conexiune Wi-Fi";
			default:
				return "Wi-Fi Connection";
		}
	}
	owner.label_name_connection_check = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connection Check";
			case LANG_CN:
				return "连接检查";
			case LANG_UKR:
				return "Connection Check";				
			case LANG_RUS:
				return "Проверка соединения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verificare conexiune";
			default:
				return "Connection Check";
		}
	}
	owner.tip_preparationg = function(language) {
		switch (language) {
			case LANG_EN:
				return "Before add gateway, please plug in the gateway and make it under Paring Mode by long pressing the button until it's LED blinking slowly.";
			case LANG_CN:
				return "添加网关前，请将网关插入电源插座，并长按网关顶部按钮，直至LED灯进入慢闪对码状态。";
			case LANG_UKR:
				return "Before add gateway, please plug in the gateway and make it under Paring Mode by long pressing the button until it's LED blinking slowly.";				
			case LANG_RUS:
				return "Перед добавлением Шлюза, пожалуйста, вставьте его в розетку и включите режим сопряжения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Inainte de adaugarea Gateway-ului in Aplicatie, va rugam sa introduceti Gateway-ul in priza si apoi sa il aduceti in modul de interconectare prin atingerea cca. 7 secunde a iconitei de pe acesta (cea care simbolizeaza o casa), pana cand LED-ul incepe sa clipeasca lent, intermitent.";
			default:
				return "Before add gateway, please plug in the gateway and make it under Paring Mode by long pressing the button until it's LED blinking slowly.";
		}
	}
	owner.tip_connection_check = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please check gateway's connection by pressing below button:<br/>it means a good connection if gateway's LED lit at the same time when below button's light on.";
			case LANG_CN:
				return "请点击下方图片对网关的连接情况进行确认：<br/>当下方按钮灯亮时，如果网关的LED灯也同时亮起，则说明网关当前连接状况良好。";
			case LANG_UKR:
				return "Please check gateway's connection by pressing below button:<br/>it means a good connection if gateway's LED lit at the same time when below button's light on.";		
			case LANG_RUS:
				return "Пожалуйста, проверьте соединение шлюза нажатием кнопки ниже. Одновременное мигание LED индикатора на шлюзе говорит о хорошем соединении";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verificati reusita conectarii Gateway-ului prin apasarea butonului de mai jos (o conexiune reusita este semnalizata prin aprinderea LED-ului de pe Gateway simultan cu apasarea butonului din aplicatie";
			default:
				return "Please check gateway's connection by pressing below button:<br/>it means a good connection if gateway's LED lit at the same time when below button's light on.";
		}
	}
	owner.msg_wifi_connection_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Congratulations! your gateway addition is succeed！ please go and check the connection work.";
			case LANG_CN:
				return "恭喜您！网关添加成功！去看看它的连接情况吧！";
			case LANG_UKR:
				return "Congratulations! your gateway addition is succeed！ please go and check the connection work.";				
			case LANG_RUS:
				return "Поздравляем! Шлюз добавлен! Проверьте работу соединения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configurarea Gateway-ului a reusit! Verificati in pasul urmator reusita conectarii.";
			default:
				return "Congratulations! your gateway addition is succeed！ please go and check the connection work.";
		}
	}
	owner.msg_please_input_gateway_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please input the GatewayName!";
			case LANG_CN:
				return "请输入网关的名字";
			case LANG_UKR:
				return "Please input the GatewayName!";				
			case LANG_RUS:
				return "Введите название шлюза!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Introduceti denumirea Gateway-ului";
			default:
				return "Please input the GatewayName!";
		}
	}
	owner.label_detection_of_gas = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gas";
			case LANG_CN:
				return "检测气体";
			case LANG_UKR:
				return "Gas";				
			case LANG_RUS:
				return "ГАЗ";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tip gaz detectat";
			default:
				return "Gas";
		}
	}
	owner.msg_add_device_finished = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device has been successfully registered to the gateway, Waiting for the device on line, it will automatically show up in 3-5 min.";
			case LANG_CN:
				return "设备已成功注册到网关，等待设备上线。\n提示：请检查设备上电情况，如果设备已经上电，请耐心等待3-5分钟，设备会自动上线。";
			case LANG_UKR:
				return "Device has been successfully registered to the gateway, Waiting for the device on line, it will automatically show up in 3-5 min.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Устройство было успешно зарегистрировано в шлюзе, Ожидание устройства на линии, будет автоматически отображаться в течении 3-5 мин.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectarea echipamentului la Gateway a reusit! Echipamentul va fi afisat in aplicatie in circa 3-5 min.";
			default:
				return "Device has been successfully registered to the gateway, Waiting for the device on line, it will automatically show up in 3-5 min.";
		}
	}
	owner.array_choice_button = function(language) {
		switch (language) {
			case LANG_EN:
				return ["FAQ", "Try again"];
			case LANG_CN:
				return ["FAQ帮助", "重新尝试"];
			case LANG_UKR:
				return ["FAQ", "Try again"];
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ["FAQ", "Еще раз"];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ["FAQ", "Reincearca"];
			default:
				return ["FAQ", "Try again"];
		}
	}
	owner.label_temperature_curve = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temperature curve";
			case LANG_CN:
				return "温度曲线";
			case LANG_UKR:
				return "Temperature curve";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "График температуры";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Graficul temperaturii";
			default:
				return "Temperature curer";
		}
	}
	owner.label_power_curve = function(language) {
		switch (language) {
			case LANG_EN:
				return "Power curve";
			case LANG_CN:
				return "发电曲线";
			case LANG_UKR:
				return "Power curve";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "График мощности";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Graficul incarcarii acumulatorului termostatului de radiator";
			default:
				return "Power curer";
		}
	}
	owner.label_voltage = function(language) {
		switch (language) {
			case LANG_EN:
				return "Voltage";
			case LANG_CN:
				return "电压";
			case LANG_UKR:
				return "Voltage";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Напряжение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tensiunea (V)";
			default:
				return "Voltage";
		}
	}
	owner.label_last_day = function(language) {
		switch (language) {
			case LANG_EN:
				return "Last 24 Hours";
			case LANG_CN:
				return "最近24小时";
			case LANG_UKR:
				return "Last 24 Hours";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "За 24 часа";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Ultimele 24 ore";
			default:
				return "Last 24 Hours";
		}
	}
	owner.label_last_week = function(language) {
		switch (language) {
			case LANG_EN:
				return "Last Week";
			case LANG_CN:
				return "最近一周";
			case LANG_UKR:
				return "Last Week";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "За неделю";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Saptamana trecuta";
			default:
				return "Last Week";
		}
	}
	owner.title_alerm_messages = function(language) {
		switch (language) {
			case LANG_EN:
				return "Messages";
			case LANG_CN:
				return "消息列表";
			case LANG_UKR:
				return "Messages";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сообщения";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Mesaje primite";
			default:
				return "Messages";
		}
	}
	owner.title_alerm_message = function(language) {
		switch (language) {
			case LANG_EN:
				return "Message";
			case LANG_CN:
				return "消息";
			case LANG_UKR:
				return "Message";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сообщение";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Lista mesaje";
			default:
				return "Message";
		}
	}
	owner.msg_update_timeout = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update timeout";
			case LANG_CN:
				return "更新超时";
			case LANG_UKR:
				return "Update timeout";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Превышено время ожидания обновления";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Timpul pentru actualizare a fost depasit.";
			default:
				return "Update timeout";
		}
	}
	owner.array_buttons_for_smart_config_fail_confirm = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Cancel', 'FAQ', 'Try other ways'];
			case LANG_CN:
				return ['取消', 'FAQ', '尝试其他方式'];
			case LANG_UKR:
				return ['Cancel', 'FAQ', 'Try other ways'];
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ['Отмена', 'Справка', 'Попробовать другой способ'];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ['Anulare', 'FAQ', 'Incearca altfel'];
			default:
				return ['Cancel', 'FAQ', 'Try other ways'];
		}
	}
	
	owner.msg_smart_config_failure = function(language) {
		switch (language) {
			case LANG_EN:
				return "Adding gateway failed. Please check FAQ for troubleshot then try again after power-off and re-up the gateway.";
			case LANG_CN:
				return "配置失败：请查看FAQ获取帮助。或将智能网关重新上电后，再次尝试配置。";
			case LANG_UKR:
				return "Adding gateway failed. Please check FAQ for troubleshot then try again after power-off and re-up the gateway.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Ошибка добавления шлюза. Изучите инструкцию еще раз, затем, попробуйте снова, после выключения и включения шлюза.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adaugarea unui nou gateway a esuat. Puteti reincerca din nou acum sau dupa un restart al echipamentelor.";
			default:
				return "Adding gateway failed. Please check FAQ for troubleshot then try again after power-off and re-up the gateway.";
		}
	}
	
	owner.msg_ap_config_failure = function(lang_options) {
		switch (language) {
			case LANG_EN:
				return "Adding gateway failed cause server cannot be connected due to gateway has failed on DNS resolution. Please contact with local custom service or supplier by email to support@poersmart.com.";
			case LANG_CN:
				return "配置失败：智能网关解析DNS失败，无法连接到服务器。请您联系当地客服或邮件联系供应商(support@poersmart.com)。";
			case LANG_UKR:
				return "Adding gateway failed cause server cannot be connected due to gateway has failed on DNS resolution. Please contact with local custom service or supplier by email to support@poersmart.com.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Неудачное подключения шлюза, из-за ошибки DNS сервера либо шлюза. Пожалуйста, свяжитесь с ближайшим сервисцентром или производителем по e-mail: suport@poersmart.com";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adaugarea unui nou gateway a esuat din cauza imposibilitatii setarii DNSului. Contactati-ne la suport@poersmart.ro";
			default:
				return "Adding gateway failed cause server cannot be connected due to gateway has failed on DNS resolution. Please contact with local custom service or supplier by email to support@poersmart.com.";
		}
	}

	owner.msg_sc_config_fail = function (language) {
		switch (language) {
			case LANG_EN:
				return "Pairing failed! please re-power the gateway and click 【Try Again】.";
			case LANG_CN:
				return "配置失败！请将网关重新上电，然后点击【重试】按钮，再次尝试网关配置。";
			case LANG_UKR:
				return "Pairing failed! please re-power the gateway and click 【Try Again】.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Сопряжение не удалось! пожалуйста, выклюсите и включите шлюз, нажмите 【Попробовать еще раз】.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Adaugarea unui nou gateway a esuat. Puteti reincerca din nou acum sau dupa un restart al echipamentelor.";
			default:
				return "Pairing failed! please re-power the gateway and click 【Try Again】.";
		}
	}

	owner.array_button_for_sc_config_fail = function (language) {
		switch (language) {
			case LANG_EN:
				return ["Try again", "Cancel"];
			case LANG_CN:
				return ["重试", "取消"];
			case LANG_UKR:
				return ["Try again", "Cancel"];
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return ["Попробовать еще раз", "Отмена"];
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return ["Reincearca", "Anulare"]
			default:
				return ["Try again", "Cancel"];
		}
	}

	owner.label_try_again = function (language) {
		switch (language) {
			case LANG_EN:
				return "Try again";
			case LANG_CN:
				return "再试一次";
			case LANG_UKR:
				return "Try again";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Попробуйте еще раз";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Reincearca";
			default:
				return "Try again";
		}
	}

	owner.msg_config_timeout = function (language) {
		switch (language) {
			case LANG_EN:
				return "Configuration timeout, please try again.";
			case LANG_CN:
				return "配置超时，请重试一次。";
			case LANG_UKR:
				return "Configuration timeout, please try again.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Время ожидания истекло, пропробуйте еще раз.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Configurarea a depasit timpul alocat. Reincearca...";
			default:
				return "Configuration timeout, please try again.";
		}
	}

	owner.msg_send_order_finished = function (language) {
		switch (language) {
			case LANG_EN:
				return "Complete instructions issued";
			case LANG_CN:
				return "指令下发完成";
			case LANG_UKR:
				return "Complete instructions issued";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Соблюдайте указанные инструкции";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Trimitere instructiuni in curs...";
			default:
				return "Complete instructions issued";
		}
	}
	owner.msg_faq = function (language){
		switch (language) {
			case LANG_EN:
				return "<ul><li>Please check if gateway was under paring mode (LED is blinking slowly).</li><li>Please make sure your mobile phone is connected with 2.4G Wi-Fi (802.11 b/g wireless router).</li><li>Please check if enter the correct Wi-Fi password.</li><li>Please check if unfamiliar Mac ID was forbidden by your wireless router.</li><li>Please check if “AP Isolation” was set on your wireless router.</li><li>Recommended visual distance between gateway and wireless router is not more than 1m.</li></ul>";
			case LANG_CN:
				return "<ul><li>请确保网关进入对码状态（LED为慢闪状态）。</li><li>请确保您手机连接的wifi网络处于2.4g的频段。 </li><li>请确保您输入连接wifi的密码是正确的。 </li><li>请确保您的路由器没有禁止陌生mac地址接入。 </li><li>请确保您的路由器没有设置AP隔离。 </li><li>建议网关与无线路由器之间的可视距离不超过1M.</li></ul>";
			case LANG_UKR:
				return "<ul><li>Please check if gateway was under paring mode (LED is blinking slowly).</li><li>Please make sure your mobile phone is connected with 2.4G Wi-Fi (802.11 b/g wireless router).</li><li>Please check if enter the correct Wi-Fi password.</li><li>Please check if unfamiliar Mac ID was forbidden by your wireless router.</li><li>Please check if “AP Isolation” was set on your wireless router.</li><li>Recommended visual distance between gateway and wireless router is not more than 1m.</li></ul>";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "<ul><li>Пожалуйста, проверьте, находится ли шлюз в режиме сопряжения (Индикатор мигает медленно)</li><li>Пожалуйста, убедитесь, подключен ли ваш смартфон к сети 2.4G Wi-Fi (802.11 b/g точке доступа)</li><li>Пожалуйста, проверьте, правильный ли Wi-Fi пароль</li><li>Пожалуйста, проверьте, не запрещено ли подключение неизвестным Mac ID к Вашему роутеру</li><li>Пожалуйста, проверьте, не включено ли «Изоляция точки доступа» на Вашем роутере</li><li>Рекомендованное расстояние между шлюзом и роутером не более метра.</li></ul>";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "In situatia in care interconectarea Gateway-ului esueaza, verificati urmatoarele: \n1. ca Gateway-ul a intrat in procedura de interconectare (LEDul de pe Gateway clipeste lent, intermitent); \n2. ca telefonul mobil pe care ruleaza Aplicatia este conectat la Wi-Fi in banda de 2.4GHz (802.11 b/g); \n3. ca ati introdus parola corecta pentru accessul in reteaua Wi-Fi; \n4. ca nu aveti restrictii declarate in setarile router-ului vizavi de blocarea conectarii unor device-uri (blocarea unor adrese MAC); \n5. ca modul “AP Isolation” nu este activ pe router-ul dvs.; \n6. ca distanta intre Gateway si router-ul wireless sa fie pe durata interconectarii de 1-3m si fara obstacole intre cele 2 echipamente.";
			default:
				return "";
		}
	}
	
	//gateway test failed 
	owner.label_gateway_test_failed = function(language){
		switch (language) {
			case LANG_EN:
				return "Connention timeout, please try again!";
			case LANG_CN:
				return "网络延迟，请重试！";
			case LANG_UKR:
				return "Connention timeout, please try again!";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Таймаут сети, пожалуйста, попробуйте снова!";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Timpul alocat a expirat.";
			default:
				return "Connention timeout, please try again!";
		}
	}
	
	//choice_mac_address
	owner.choice_mac_address = function(language){
		switch (language) {
			case LANG_EN:
				return "Select gateway Mac";
			case LANG_CN:
				return "Select gateway Mac";
			case LANG_UKR:
				return "Select gateway Mac";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Выберите Mac Address";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Cod Gateway";
			default:
				return "Select gateway Mac";
		}
	}
	//无法从路由器获取动态ip地址
	owner.msg_errstatus_1 = function(language){
		switch (language) {
			case LANG_EN:
				return "Try access to the router, can not get dynamic IP address.";
			case LANG_CN:
				return "尝试接入路由器，无法获取动态ip地址。";
			case LANG_UKR:
				return "Try access to the router, can not get dynamic IP address.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Try access to the router, can not get dynamic IP address.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verifica ca routerul sa fie setat pentru alocarea dinamica a IPurilor.";
			default:
				return "Try access to the router, can not get dynamic IP address.";
		}
	}
	
	//无法从路由器获取动态ip地址
	owner.msg_errstatus_2 = function(language){
		switch (language) {
			case LANG_EN:
				return "Unable to obtain dynamic IP address from the router.";
			case LANG_CN:
				return "无法从路由器获取动态ip地址。";
			case LANG_UKR:
				return "Unable to obtain dynamic IP address from the router.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Unable to obtain dynamic IP address from the router.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Alocarea IPului a esuat!";
			default:
				return "Unable to obtain dynamic IP address from the router.";
		}
	}
	//成功接入
	owner.msg_errstatus_3 = function(language){
		switch (language) {
			case LANG_EN:
				return "Successfully connected to router";
			case LANG_CN:
				return "成功连接到路由器";
			case LANG_UKR:
				return "Successfully connected to router";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Successfully connected to router";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Conectare la router-ul Wi-Fi, reusita!";
			default:
				return "Successfully connected to router";
		}
	}
	//无线网络配置错误，密码错误
	owner.msg_errstatus_4 = function(language){
		switch (language) {
			case LANG_EN:
				return "Wireless network configuration error or password error.";
			case LANG_CN:
				return "无线网络配置错误，密码错误";
			case LANG_UKR:
				return "Wireless network configuration error or password error.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Wireless network configuration error or password error.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Eroare de configurare a retelei Wi-Fi sau parola introdusa gresit.";
			default:
				return "Wireless network configuration error or password error.";
		}
	}
	//dns解析失败
	owner.msg_errstatus_6 = function(language){
		switch (language) {
			case LANG_EN:
				return "DNS parsing failed.";
			case LANG_CN:
				return "dns解析失败。";
			case LANG_UKR:
				return "DNS parsing failed.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "DNS parsing failed.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Verificare DNS, esuata!";
			default:
				return "DNS parsing failed.";
		}
	}
	//网关内部错误，请重新上电
	owner.msg_errstatus_7 = function(language){
		switch (language) {
			case LANG_EN:
				return "Gateway operation error, please re - up.";
			case LANG_CN:
				return "网关内部错误，请重新上电。";
			case LANG_UKR:
				return "Gateway operation error, please re - up.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Gateway operation error, please re - up.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Eroare in functionarea Gateway-ului, scoateti-o si reintroduceti-o in priza pentru a se restarta! ";
			default:
				return "Gateway operation error, please re - up.";
		}
	}
	//未知错误
	owner.msg_errstatus_default = function(language){
		switch (language) {
			case LANG_EN:
				return "unknown error, please contact customer service.";
			case LANG_CN:
				return "未知错误，请联系客服。";
			case LANG_UKR:
				return "unknown error, please contact customer service.";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "unknown error, please contact customer service.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Tip de eroare necunoscut. Contactati-ne la suport@poersmart.ro";
			default:
				return "unknown error, please contact customer service.";
		}
	}
	
	//delete_mode
	owner.label_delete_all = function(language) {
		switch (language) {
			case LANG_EN:
				return "Delete All";
			case LANG_CN:
				return "删除所有";
			case LANG_UKR:
				return "Delete";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Удаление";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "Sterge";
			default:
				return "Delete";
		}
	}
	owner.msg_wake_up_remind = function(language) {
		switch (language) {
			case LANG_EN:
				return "The current device is dormant, wake-up takes a few minutes, please wait a moment.";
			case LANG_CN:
				return "目前设备处于休眠状态，唤醒需要几分钟，请稍等片刻。";
			case LANG_UKR:
				return "";
			case LANG_FRA:
				return "";
			case LANG_ESP:
				return "";
			case LANG_RUS:
				return "Устройство в режиме ожидания, пробуждение займет несколько минут. Пожалуйста, подождите.";
			case LANG_BLR:
				return "";
			case LANG_ROM:
				return "";
			default:
				return "The current device is dormant, wake-up takes a few minutes, please wait a moment.";
		}
	}
	
	
}(mui, window.poer_language = {}));
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
		Russian: "Pусский",
		Romanian: "Romana"
	};

	//label_back
	owner.label_back = function(language){
		switch (language) {
			case LANG_EN:
				return "Back";
			case LANG_CN:
				return "返回";
			case LANG_RUS:
				return "Назад";
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
			case LANG_RUS:
				return "Установка отпуска";
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
			case LANG_RUS:
				return "WLAN";
			case LANG_ROM:
				return "Scanare Gateway...";
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
			case LANG_RUS:
				return "Сохранить";
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
				case LANG_RUS:
					return "Повтор";
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
				case LANG_RUS:
					return "Добавить";
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
			case LANG_RUS:
				return "Копировать";
			case LANG_ROM:
				return "Copiere programare in zilele selectate";
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
			case LANG_RUS:
				return "Подтвердить";
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
			case LANG_RUS:
				return "Отмена";
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
				return "Update succeed";
			case LANG_CN:
				return "更新成功";
			case LANG_RUS:
				return "Обновлено успешно";
			case LANG_ROM:
				return "Informatii trimise cu succes!";
			default:
				return "Update succeed";
		}
	}

	//更新失败
	owner.label_update_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update failed";
			case LANG_CN:
				return "更新失败";
			case LANG_RUS:
				return "Ошибка обновления";
			case LANG_ROM:
				return "Trimitere informatii, esuata...";
			default:
				return "Update failed";
		}
	}

	//设置更新中
	owner.label_set_updating = function(language) {
		switch (language) {
			case LANG_EN:
				return "Set is updating...";
			case LANG_CN:
				return "设置更新中...";
			case LANG_RUS:
				return "Настройки обновляются...";
			case LANG_ROM:
				return "Setarile se actualizeaza...";
			default:
				return "Set is updating...";
		}
	}

	//更新中
	owner.label_updating = function(language) {
		switch (language) {
			case LANG_EN:
				return "Updating...";
			case LANG_CN:
				return "更新中...";
			case LANG_RUS:
				return "Обновляется...";
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
				return "";
			case LANG_CN:
				return "";
			case LANG_RUS:
				return "";
			case LANG_ROM:
				return "";
			default:
				return "";
		}
	}

	//Yes
	owner.label_yes = function(language) {
		switch (language) {
			case LANG_EN:
				return "Yes";
			case LANG_CN:
				return "是";
			case LANG_RUS:
				return "Да";
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
			case LANG_RUS:
				return "Нет";
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
				return "";
			case LANG_CN:
				return "";
			case LANG_RUS:
				return "";
			case LANG_ROM:
				return "";
			default:
				return "";
		}
	}

	//Ok
	owner.label_ok = function(language) {
		switch (language) {
			case LANG_EN:
				return "Ok";
			case LANG_CN:
				return "好的";
			case LANG_RUS:
				return "Ок";
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
			case LANG_RUS:
				return "Не менять";
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
				return "Click again to exit";
			case LANG_CN:
				return "再按一次退出应用";
			case LANG_RUS:
				return "Нажмите еще раз для выхода из приложения";
			case LANG_ROM:
				return "Apasati inca odata pentru a iesi din aplicatie.";
			default:
				return "Click again to exit";
		}
	}

	//设备类型
	owner.label_devicetype_array = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Thermostat', 'Security'];
			case LANG_CN:
				return ['温控设备', '安防设备'];
			case LANG_RUS:
				return ['Температура','Сигнализатор газа'];
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
			case LANG_RUS:
				return "E-mail";
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
				return "Please enter E-mail Address";
			case LANG_CN:
				return "请输入邮箱";
			case LANG_RUS:
				return "Пожалуйста, введите Email";
			case LANG_ROM:
				return "Introduceti adresa de e-mail";
			default:
				return "Please enter E-mail Address";
		}
	}

	//邮箱长度太短
	owner.label_email_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "E-mail is too short! The valid length is 5~50";
			case LANG_CN:
				return "邮箱长度太短！有效长度是5~50";
			case LANG_RUS:
				return "E-mail слишком короткий. 5-50 символов";
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
			case LANG_RUS:
				return "E-mail слишком длинный. 5-50 символов";
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
			case LANG_RUS:
				return "Пароль";
			case LANG_ROM:
				return "Parola";
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
			case LANG_RUS:
				return "Пожалуйста, введите пароль";
			case LANG_ROM:
				return "Introduceti parola";
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
			case LANG_RUS:
				return "Пароль слишком короткий. 3-10 символов";
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
			case LANG_RUS:
				return "Пароль слишком длинный. 3-10 символов";
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
			case LANG_RUS:
				return "Новый пароль";
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
			case LANG_RUS:
				return "Пожалуйста, введите новый пароль";
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
			case LANG_RUS:
				return "Пароль слишком короткий. 3-10 символов";
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
			case LANG_RUS:
				return "Пароль слишком длинный. 3-10 символов";
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
			case LANG_RUS:
				return "Подтвердить";
			case LANG_ROM:
				return "Confirmare parola";
			default:
				return "Confirm";
		}
	}

	//确认密码为空
	owner.label_confirm_password_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please confirm password";
			case LANG_CN:
				return "请输入确认密码";
			case LANG_RUS:
				return "Пожалуйста, подтвердите пароль";
			case LANG_ROM:
				return "Reintroduceti parola";
			default:
				return "Please confirm password";
		}
	}

	//密码与确认密码不一致
	owner.label_confirm_password_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Passwords do not match!";
			case LANG_CN:
				return "密码与确认密码不一致";
			case LANG_RUS:
				return "Неверный пароль";
			case LANG_ROM:
				return "Parolele introduse difera! Reintroduceti-le corect!";
			default:
				return "Passwords do not match!";
		}
	}

	//新密码与确认密码不一致
	owner.label_new_confirm_password_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Passwords do not match!";
			case LANG_CN:
				return "密码与确认密码不一致!";
			case LANG_RUS:
				return "Новый пароль должен отличаться от старого!";
			case LANG_ROM:
				return "Parolele introduse difera! Reintroduceti-le corect!";
			default:
				return "Passwords do not match!";
		}
	}

	//语言
	owner.label_language = function(language) {
		switch (language) {
			case LANG_EN:
				return "Language";
			case LANG_CN:
				return "语言";
			case LANG_RUS:
				return "Язык";
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
			case LANG_RUS:
				return "Английский";
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
			case LANG_RUS:
				return "Китайский";
			case LANG_ROM:
				return "中文";
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
			case LANG_RUS:
				return "Войти";
			case LANG_ROM:
				return "Acces cont";
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
			case LANG_RUS:
				return "Demo Login";
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
			case LANG_RUS:
				return "Регистрация";
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
				return "Register succeed!";
			case LANG_CN:
				return "注册成功!";
			case LANG_RUS:
				return "Зарегистрирован!";
			case LANG_ROM:
				return "Inregistrarea noului cont s-a realizat cu succes!";
			default:
				return "Register succeed!";
		}
	}

	//注册失败
	owner.label_register_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Register failed!";
			case LANG_CN:
				return "注册失败!";
			case LANG_RUS:
				return "Ошибка регистрации!";
			case LANG_ROM:
				return "Inregistrarea noului cont a esuat! Este posibil sa existe deja un cont cu aceasta adresa de e-mail!";
			default:
				return "Register failed!";
		}
	}

	//忘记密码
	owner.label_forget_password = function(language) {
		switch (language) {
			case LANG_EN:
				return "Forget Password";
			case LANG_CN:
				return "忘记密码";
			case LANG_RUS:
				return "Забыли пароль?";
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
				return " Get location list failed!";
			case LANG_CN:
				return "获取区域信息失败!";
			case LANG_RUS:
				return "Ошибка!";
			case LANG_ROM:
				return "Nu s-a reusit obtinerea informatiilor despre zona!";
			default:
				return "Get location list failed!";
		}
	}

	//locate信息错误
	owner.label_locate_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location info is error.";
			case LANG_CN:
				return "区域信息有误.";
			case LANG_RUS:
				return "Ошибка положения.";
			case LANG_ROM:
				return "Informatia despre locatie este incorecta.";
			default:
				return "Locate info is error.";
		}
	}

	//登录失败
	owner.label_login_fail = function(language) {
		switch (language) {
			case LANG_EN:
				return "Login failed!\n please try again after check your phone's Wi-Fi connection or Poer app.'s cellular data access from Settings.";
			case LANG_CN:
				return "登录失败！\n 请检查网络连接是否正常后，再次尝试登录。";
			case LANG_RUS:
				return "Войти не удалось, попробуйте еще раз, после проверки Wi-Fi соединения вашего телефона и доступа приложения Poersmart к настройкам сети.";
			case LANG_ROM:
				return "Conectarea la contul dvs.\n a esuat, reincercati dupa verificarea diponibilitatii internetului mobil sau Wi-Fi.";
			default:
				return "Login failed!\n please try again after check your phone's Wi-Fi connection or Poer app.'s cellular data access from Settings.";
		}
	}

	//home模式
	owner.label_home = function(language) {
		switch (language) {
			case LANG_EN:
				return "Home";
			case LANG_CN:
				return "在家";
			case LANG_RUS:
				return "Дома";
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
			case LANG_RUS:
				return "Вне дома";
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
			case LANG_RUS:
				return "В отпуске";
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
			case LANG_RUS:
				return "Выкл.";
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
			case LANG_RUS:
				return "Управление";
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
			case LANG_RUS:
				return "Шлюз отключен";
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
			case LANG_RUS:
				return "Отключен";
			case LANG_ROM:
				return "<font size='1px'>Offline</font>";
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
			case LANG_RUS:
				return "Влажность";
			case LANG_ROM:
				return "Umiditate";
			default:
				return "Humidity";
		}
	}

	//改变工作模式为
	owner.label_change_workmode_to = function(language) {
		switch (language) {
			case LANG_EN:
				return "Change work mode to ";
			case LANG_CN:
				return "改变工作模式为 ";
			case LANG_RUS:
				return "Изменить режим на: ";
			case LANG_ROM:
				return "Confirmati modificarea generala a setarilor prin impunerea modului ";
			default:
				return "Change work mode to ";
		}
	}

	//Account info
	owner.label_account_info = function(language) {
		switch (language) {
			case LANG_EN:
				return "Account Info";
			case LANG_CN:
				return "账号信息";
			case LANG_RUS:
				return "Личная информация";
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
			case LANG_RUS:
				return "Имя";
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
			case LANG_RUS:
				return "Пожалуйста, введите Имя";
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
			case LANG_RUS:
				return "Имя слишком короткое. 3-15 символов.";
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
			case LANG_RUS:
				return "Имя слишком длинное. 3-15 символов";
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
			case LANG_RUS:
				return "Страана";
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
			case LANG_RUS:
				return "Индекс";
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
			case LANG_RUS:
				return "Введите почтовый индекс";
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
			case LANG_RUS:
				return "Индекс слишком короткий. 5-10 символов";
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
			case LANG_RUS:
				return "Индекс слишком длинный. 5~10 символов";
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
			case LANG_RUS:
				return "Изменить пароль";
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
			case LANG_RUS:
				return "Выйти";
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
				return "Menu";
			case LANG_CN:
				return "菜单";
			case LANG_RUS:
				return "Информация о доме";
			case LANG_ROM:
				return "Meniul principal";
			default:
				return "Menu";
		}
	}

	//zone setup
	owner.label_zone_setup = function(language) {
		switch (language) {
			case LANG_EN:
				return "Zone Setting";
			case LANG_CN:
				return "区域设置";
			case LANG_RUS:
				return "Настройка зон отопления";
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
				return "Gateway Setting";
			case LANG_CN:
				return "网关设置";
			case LANG_RUS:
				return "Настройка шлюза";
			case LANG_ROM:
				return "Setari Gateway";
			default:
				return "Gateway Setting";
		}
	}

	//sn
	owner.label_sn = function(language) {
		switch (language) {
			case LANG_EN:
				return "SN";
			case LANG_CN:
				return "序列号";
			case LANG_RUS:
				return "Номер";
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
				return "Software version";
			case LANG_CN:
				return "软件版本";
			case LANG_RUS:
				return "Версия прошивки";
			case LANG_ROM:
				return "Versiune software";
			default:
				return "Software version";
		}
	}

	//硬件
	owner.label_hardware = function(language) {
		switch (language) {
			case LANG_EN:
				return "Hardware version";
			case LANG_CN:
				return "硬件版本";
			case LANG_RUS:
				return "Версия оборудования";
			case LANG_ROM:
				return "Versiune hardware";
			default:
				return "Hardware version";
		}
	}

	//时区
	owner.label_time_zone = function(language) {
		switch (language) {
			case LANG_EN:
				return "Time zone";
			case LANG_CN:
				return "时区";
			case LANG_RUS:
				return "Часовой пояс";
			case LANG_ROM:
				return "Fus orar";
			default:
				return "Time zone";
		}
	}

	//device setup
	owner.label_device_setup = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device Setting";
			case LANG_CN:
				return "设备设置";
			case LANG_RUS:
				return "Настройка устройства";
			case LANG_ROM:
				return "Setare generala echipament";
			default:
				return "Device Setting";
		}
	}

	//温控设备
	owner.label_thermostat = function(language) {
		switch (language) {
			case LANG_EN:
				return "Thermostat";
			case LANG_CN:
				return "温控设备";
			case LANG_RUS:
				return "Терморегулятор";
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
				return "Temperature Setting";
			case LANG_CN:
				return "温度设置";
			case LANG_RUS:
				return "Настройка температуры";
			case LANG_ROM:
				return "Setare generala temperatura";
			default:
				return "Temperature Setting";
		}
	}

	//Away温度
	owner.label_away_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Away Temperature";
			case LANG_CN:
				return "离开温度";
			case LANG_RUS:
				return "Температура режима:Вне дома";
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
			case LANG_RUS:
				return "Температура режима:Вне дома";
			case LANG_ROM:
				return "Temp. in modul Plecat";
			default:
				return "Away Temp.";
		}
	}

	//Holiday温度
	owner.label_holiday_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Holiday Temperature";
			case LANG_CN:
				return "假日温度";
			case LANG_RUS:
				return "Температура режима:Отпуск";
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
			case LANG_RUS:
				return "Температура режима:Выкл";
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
			case LANG_RUS:
				return "Температура режима:Выкл";
			case LANG_ROM:
				return "Temp. in modul Inchis";
			default:
				return "Off Temp.";
		}
	}

	//改变温度
	owner.label_change_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Change temperature";
			case LANG_CN:
				return "改变温度";
			case LANG_RUS:
				return "Изменение температуры";
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
				return "Temperature Unit";
			case LANG_CN:
				return "温度单位设置";
			case LANG_RUS:
				return "Настройка температуры";
			case LANG_ROM:
				return "Setarea temperaturii";
			default:
				return "Temperature Unit";
		}
	}

	//摄氏度
	owner.label_centigrade = function(language) {
		switch (language) {
			case LANG_EN:
				return "Centigrade";
			case LANG_CN:
				return "摄氏度";
			case LANG_RUS:
				return "Цельсий";
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
			case LANG_RUS:
				return "Фаренгейт";
			case LANG_ROM:
				return "Grade Fahrenheit";
			default:
				return "Fahrenheit";
		}
	}

	//设备显示温度
	owner.label_temp_unit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device Temp. Unit";
			case LANG_CN:
				return "设备显示温度";
			case LANG_RUS:
				return "оборудование Еденицы темп.";
			case LANG_ROM:
				return "echipamente Temp. se afiseaza in";
			default:
				return "Device Temp. Unit";
		}
	}

	//feedback
	owner.label_feedback = function(language) {
		switch (language) {
			case LANG_EN:
				return "Feedback";
			case LANG_CN:
				return "反馈";
			case LANG_RUS:
				return "Отзывы";
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
			case LANG_RUS:
				return "Пожалуйста, введите отзыв";
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
			case LANG_RUS:
				return "Отзыв слишком короткий! Допустимая длинна 10-100";
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
			case LANG_RUS:
				return "Отзыв слишком длинный! Допустимая длинна 10-100";
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
				return "About Us";
			case LANG_CN:
				return "关于我们";
			case LANG_RUS:
				return "О нас";
			case LANG_ROM:
				return "Despre noi";
			default:
				return "About Us";
		}
	}

	//smart home
	owner.label_smart_home = function(language) {
		switch (language) {
			case LANG_EN:
				return "Smart Home";
			case LANG_CN:
				return "智能家居";
			case LANG_RUS:
				return "Умный дом";
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
			case LANG_RUS:
				return "http://www.poersmart.by <br/> ООО Термосмарт <br/> office@poersmart.by Политика конфиденциальности";
			case LANG_ROM:
				return "http://www.poersmart.ro <br/>Structura si adaptarea in limba Romana vers. 20161128 de<br/>cristiandan@poersmart.ro";
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
			case LANG_RUS:
				return "©2015 POER, Все права защищены";
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
				return "Version: ";
			case LANG_CN:
				return "版本: ";
			case LANG_RUS:
				return "Версия: ";
			case LANG_ROM:
				return "Versiune: ";
			default:
				return "Version: ";
		}
	}

	//忘记密码提交成功
	owner.label_forget_password_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Submit succeed, please check your email.";
			case LANG_CN:
				return "提交成功，请查收邮件.";
			case LANG_RUS:
				return "Отправлено. Проверьте свой email.";
			case LANG_ROM:
				return "Trimiterea instructiunilor de resetare a parolei a fost efectuata cu succes. Verificati-va e-mail-ul in cateva minute (inclusiv in Junk/Spam).";
			default:
				return "Submit succeed, please check your email.";
		}
	}

	//忘记密码提交失败
	owner.label_forget_password_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Submit failed.";
			case LANG_CN:
				return "提交失败.";
			case LANG_RUS:
				return "Передача не удалась.";
			case LANG_ROM:
				return "Adresa de e-mail necunoscuta. Trimiterea instructiunilor de resetare a parolei a esuat!";
			default:
				return "Submit failed.";
		}
	}

	//current
	owner.label_current = function(language) {
		switch (language) {
			case LANG_EN:
				return "Current";
			case LANG_CN:
				return "当前";
			case LANG_RUS:
				return "Текущая";
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
			case LANG_RUS:
				return "Желаемая";
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
			case LANG_RUS:
				return "Электричество";
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
				return "Hold Until:";
			case LANG_CN:
				return "持续到：";
			case LANG_RUS:
				return "Температура&nbsp;установлена&nbsp;до:";
			case LANG_ROM:
				return "Temp. dorita se mentine pana la ora:";
			default:
				return "Hold Until:";
		}
	}

	//Press for options
	owner.label_btn_press = function(language) {
		switch (language) {
			case LANG_EN:
				return "Press for more options";
			case LANG_CN:
				return "点击更多操作";
			case LANG_RUS:
				return "Нажать для настроек";
			case LANG_ROM:
				return "Apasa pentru optiuni";
			default:
				return "Press for more options";
		}
	}

	//Following Schedule
	owner.label_follow_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Following the Schedule";
			case LANG_CN:
				return "按编程曲线执行";
			case LANG_RUS:
				return "В соответствии с расписанием";
			case LANG_ROM:
				return "Ora urmatoarei modificari a temperaturii";
			default:
				return "Following the Schedule";
		}
	}

	//Schedule
	owner.label_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Schedule";
			case LANG_CN:
				return "编程";
			case LANG_RUS:
				return "Расписание";
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
				return "Copy schedule";
			case LANG_CN:
				return "编程拷贝";
			case LANG_RUS:
				return "Скопировать расписание";
			case LANG_ROM:
				return "Copiere program";
			default:
				return "Copy schedule";
		}
	}

	//update Schedule
	owner.label_update_schedule = function(language) {
		switch (language) {
			case LANG_EN:
				return "Schedule Update?";
			case LANG_CN:
				return "更新编程?";
			case LANG_RUS:
				return "Обновить расписание?";
			case LANG_ROM:
				return "Confirmati actualizarea programului?";
			default:
				return " Schedule Update?";
		}
	}

	//node not exist
	owner.label_node_noexist = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device does not exist.";
			case LANG_CN:
				return "该设备不存在。";
			case LANG_RUS:
				return "Отсутствует устройство.";
			case LANG_ROM:
				return "Echipament lipsa.";
			default:
				return "Device does not exist.";
		}
	}

	//gateway not exist
	owner.label_gateway_noexist = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway does not exist.";
			case LANG_CN:
				return "该网关不存在。";
			case LANG_RUS:
				return "Отсутствует шлюз.";
			case LANG_ROM:
				return "Gateway lipsa.";
			default:
				return "Gateway does not exist.";
		}
	}

	//schedule info error
	owner.label_schedule_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Schedule error.";
			case LANG_CN:
				return "编程信息错误.";
			case LANG_RUS:
				return "Ошибка в расписании.";
			case LANG_ROM:
				return "Programare eronata.";
			default:
				return "Schedule error.";
		}
	}

	//cann't override
	owner.label_cannot_override = function(language) {
		switch (language) {
			case LANG_EN:
				return "Override is not allowed in current mode, please switch to Home Mode before Override.";
			case LANG_CN:
				return "当前模式不支持越控";
			case LANG_RUS:
				return "Управление возможно только в режиме управления или Дома";
			case LANG_ROM:
				return "Controlul este posibil numai in modul Acasa";
			default:
				return "Override is not allowed in current mode, please switch to Home Mode before Override.";
		}
	}

	//override time error
	owner.label_override_time_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Override's end time can not be earlier than the current time";
			case LANG_CN:
				return "越控结束时间不得早于当前时间";
			case LANG_RUS:
				return "Время управления должно быть позже текущего";
			case LANG_ROM:
				return "Timpul setat trebuie sa fie mai mare decat cel din prezent";
			default:
				return "Override's end time can not be earlier than the current time";
		}
	}

	//deviceinfo
	owner.label_deviceinfo = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device Info";
			case LANG_CN:
				return "设备信息";
			case LANG_RUS:
				return "Информация об устройстве";
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
				return "Location Setting";
			case LANG_CN:
				return "位置设置";
			case LANG_RUS:
				return "Ввод названия места расположения";
			case LANG_ROM:
				return "Setare locatie";
			default:
				return "Location Setting";
		}
	}

	//location
	owner.label_location = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location";
			case LANG_CN:
				return "位置";
			case LANG_RUS:
				return "Название места расположения";
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
			case LANG_RUS:
				return "Пожалуйста введите название места расположения";
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
				return "Location message is too short! The valid length is 3~20";
			case LANG_CN:
				return "位置信息长度太短！有效长度是3~20";
			case LANG_RUS:
				return "Слишком коротное название места расположения! Рекомендуется от 3 до 20";
			case LANG_ROM:
				return "Numele locatiei este prea scurt (lungimea acceptata are intre 3 si 20 caractere)!";
			default:
				return "Location message is too short! The valid length is 3~20";
		}
	}

	//location长度太长
	owner.label_location_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location message is too long! The valid length is 3~20";
			case LANG_CN:
				return "位置信息长度太长！有效长度是3~20";
			case LANG_RUS:
				return "Слишком длинное название места расположения! Рекомендуется от 3 до 20";
			case LANG_ROM:
				return "Numele locatiei este prea lung (lungimea acceptata are intre 3 si 20 caractere)!";
			default:
				return "Location message is too long! The valid length is 3~20";
		}
	}

	//gateway id
	owner.label_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway";
			case LANG_CN:
				return "网关";
			case LANG_RUS:
				return "Шлюз";
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
			case LANG_RUS:
				return "Заряд батареи";
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
			case LANG_RUS:
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
			case LANG_RUS:
				return "Время начала";
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
			case LANG_RUS:
				return "Время окончания";
			case LANG_ROM:
				return "Data si ora de sfarsit:";
			default:
				return "End Time";
		}
	}

	//temperature
	owner.label_temperature = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temperature";
			case LANG_CN:
				return "温度";
			case LANG_RUS:
				return "Температура";
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
				return "Starting Hour is error! The valid range is 0~24.";
			case LANG_CN:
				return "开始时间的小时数据有误!有效范围是0~24.";
			case LANG_RUS:
				return "Ошибка! Время начала указывается от 0 до 24.";
			case LANG_ROM:
				return "Ora de start este invalida! Ora trebuie sa fie intre 0 si 24.";
			default:
				return "Starting Hour is error! The valid range is 0~24.";
		}
	}

	//start time minute error
	owner.label_starttime_minuteerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "Starting minute is error! The valid range is 0 or 30.";
			case LANG_CN:
				return "开始时间的分钟数据必须是0或30。";
			case LANG_RUS:
				return "Минуты начала должны быть 0 или 30.";
			case LANG_ROM:
				return "Minutul de start este invalid! Minutul trebuie sa fie 0 sau 30.";
			default:
				return "Starting minute is error! The valid range is 0 or 30.";
		}
	}

	//end time hour error
	owner.label_endtime_hourerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "End Hour is error! The valid range is 0~24.";
			case LANG_CN:
				return "结束时间的小时数据有误!有效范围是0~24.";
			case LANG_RUS:
				return "Ошибка! Время окончания указывается от 0 до 24.";
			case LANG_ROM:
				return "Ora de sfarsit este invalida! Ora trebuie sa fie intre 0 si 24.";
			default:
				return "End Hour is error! The valid range is 0~24.";
		}
	}

	//end time minute error
	owner.label_endtime_minuteerror = function(language) {
		switch (language) {
			case LANG_EN:
				return "End minute is error! The valid range is 0 or 30.";
			case LANG_CN:
				return "结束时间的分钟数据必须是0或30。";
			case LANG_RUS:
				return "Минуты окончания должны быть 0 или 30.";
			case LANG_ROM:
				return "Minutul de sfarsit este invalid! Minutul trebuie sa fie 0 sau 30!";
			default:
				return "End minute is error! The valid range is 0 or 30.";
		}
	}

	//end time <start time
	owner.label_start_end_time_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Ending time must be later than starting time";
			case LANG_CN:
				return "结束时间必须大于开始时间";
			case LANG_RUS:
				return "Время окончания должно быть позже времени начала";
			case LANG_ROM:
				return "Timpul de sfarsit trebuie sa fie mai mare decat cel de start";
			default:
				return "End time must be later than start time";
		}
	}

	//temperature error
	owner.label_temperature_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temperature error! The valid range is ";
			case LANG_CN:
				return "温度错误! 有效范围是 ";
			case LANG_RUS:
				return "Ошибка температуры! Разрешенный показатель:";
			case LANG_ROM:
				return "Temperatura este invalida! Intervalul corect este ";
			default:
				return "Temperature error! The valid range is ";
		}
	}

	//start time too big
	owner.label_starttime_toobig = function(language) {
		switch (language) {
			case LANG_EN:
				return "Starting time can not be earlier than 24:00!";
			case LANG_CN:
				return "开始时间不能大于24:00！";
			case LANG_RUS:
				return "Время начала не может быть позже 24:00!";
			case LANG_ROM:
				return "Ora de inceput nu poate fi mai mare ca 24:00!";
			default:
				return "Start time can not be eailer than 24:00!";
		}
	}

	//end time too big
	owner.label_endtime_toobig = function(language) {
		switch (language) {
			case LANG_EN:
				return "Ending time can not be later longer than 24:00!";
			case LANG_CN:
				return "结束时间不能大于24:00！";
			case LANG_RUS:
				return "Время окончания не может быть позже 24:00!";
			case LANG_ROM:
				return "Ora de sfarsit nu poate fi mai mare ca 24:00!";
			default:
				return "End time can not be later than 24:00!";
		}
	}

	//first point error
	owner.label_firstpoint_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The first period's start time point must be 0:00!";
			case LANG_CN:
				return "第一个时间节点必须是0:00！";
			case LANG_RUS:
				return "Первая возможная установка времени 0:00!";
			case LANG_ROM:
				return "Prima setare de temperatura trebuie sa fie de la ora 0:00!";
			default:
				return "The first period's start time point must be 0:00!";
		}
	}

	//end point error
	owner.label_endpoint_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The last period's end time point must be 24:00!";
			case LANG_CN:
				return "最后一个节点必须是24:00！";
			case LANG_RUS:
				return "Последняя возможная установка времени 24:00!";
			case LANG_ROM:
				return "Ultima setare de temperatura trebuie sa fie de la ora 24:00!";
			default:
				return "The last period's end time point must be 24:00!";
		}
	}

	//point max
	owner.label_timepoint_max = function(language) {
		switch (language) {
			case LANG_EN:
				return "The max shedule periods is 13!";
			case LANG_CN:
				return "最多支持13个编程时间节点！";
			case LANG_RUS:
				return "Максимально 13 установок времени";
			case LANG_ROM:
				return "Numarul maxim de setari intr-o zi este de 13";
			default:
				return "The max shedule periods is 13!";
		}
	}

	//point max
	owner.label_firstpoint_delete = function(language) {
		switch (language) {
			case LANG_EN:
				return "The first time point can not be deleted!";
			case LANG_CN:
				return "第一个时间节点不能被删除！";
			case LANG_RUS:
				return "Первая точка времени не может быть удалена!";
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
				return ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
			case LANG_CN:
				return ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
			case LANG_RUS:
				return ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'];
			case LANG_ROM:
				return ['Duminica', 'Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri', 'Sambata'];
			default:
				return ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
		}
	}

	//add device
	owner.label_add_device = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Device";
			case LANG_CN:
				return "添加设备";
			case LANG_RUS:
				return "Подключить устройство";
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
			case LANG_RUS:
				return "Подключить термостат";
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
			case LANG_RUS:
				return "Подключить Шлюз";
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
			case LANG_RUS:
				return "Сканируйте ID на обратной стороне устройства. Если не удается, " + "вы можете ввести ID вручную.";
			case LANG_ROM:
				return "Scanati codul de bare de pe spatele echipamentului. Pentru scanare, permiteti accesarea camerei de catre aplicatie din setarile telefonului. Daca nu reusiti, puteti sa introduceti codul manual.";
			default:
				return "Scan device ID on the device's back.If any trouble on scanning, " + "you may type the ID manually.";
		}
	}

	//Add product success
	owner.label_addproduct_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add device succeed!";
			case LANG_CN:
				return "添加设备成功!";
			case LANG_RUS:
				return "Устройство успешно добавлено!";
			case LANG_ROM:
				return "Echipamentul a fost adaugat cu succes!";
			default:
				return "Add device succeed!";
		}
	}

	//Add product fail
	owner.label_addproduct_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device is offline, please make sure device powered, and near the gateway" + ".Device will be online automatically.";
			case LANG_CN:
				return "设备未上线。请确认设备已上电，并靠近网关。设备将自动上线。";
			case LANG_RUS:
				return "Устройство не подключено. Пожалуйста, убедитесь, что устройство подключено к эл.питанию и достаточно близко к Шлюзу.";
			case LANG_ROM:
				return "Echipamentul este offline. Asigurati-va ca echipamentul este conectat la priza si in apropierea Gateway-ului" +" Echipamentul va reveni online dupa conectarea la priza";
			default:
				return "Device is offline, please make sure device powered, and near the gateway" + ".Device will online after in power.";
		}
	}

	//mac empty
	owner.label_mac_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter device ID";
			case LANG_CN:
				return "请输入设备ID";
			case LANG_RUS:
				return "Введите ID устройства";
			case LANG_ROM:
				return "Introduceti codul echipamentului";
			default:
				return "Please enter device ID";
		}
	}

	//mac error
	owner.label_mac_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "The device ID starts with 'FCE892...'";
			case LANG_CN:
				return "请确保设备ID前六位为: 'FCE892...'";
			case LANG_RUS:
				return "ID устройств начинается с 'FCE892...'";
			case LANG_ROM:
				return "Codul echipamentului incepe cu 'FCE892...'";
			default:
				return "The deviceid is start with 'FCE892...'";
		}
	}

	//mac short
	owner.label_mac_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "The device ID length is 6 or 12.";
			case LANG_CN:
				return "设备ID长度是6位或者12位.";
			case LANG_RUS:
				return "Длинна ID устройства от 6 до 12 знаков.";
			case LANG_ROM:
				return "Lungimea codului este de 6 sau 12 caractere.";
			default:
				return "The device ID length is 6 or 12.";
		}
	}

	//check device
	owner.label_check_device = function(language) {
		switch (language) {
			case LANG_EN:
				return "Adding Device ...";
			case LANG_CN:
				return "添加设备中 ...";
			case LANG_RUS:
				return "Добавить устройство ...";
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
			case LANG_RUS:
				return "Соединить";
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
			case LANG_RUS:
				return "Сканировать";
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
			case LANG_RUS:
				return "Выбор";
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
			case LANG_RUS:
				return "Проверка";
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
			case LANG_RUS:
				return "Состояние";
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
			case LANG_RUS:
				return "Сканируйте ID на обратной стороне устройства. Если не удается, " + "вы можете ввести ID вручную.";
			case LANG_ROM:
				return "Scanati codul de bare de pe spatele echipamentului. Pentru scanare, permiteti accesarea camerei de catre aplicatie din setarile telefonului. Daca nu reusiti, puteti sa introduceti codul manual.";
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
			case LANG_RUS:
				return "Далее";
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
				return "Be sure the gateway was installed and powered in right way. Flashing Led " + "means it is ready for Wi-Fi connection.";
			case LANG_CN:
				return "确认网关已经安装并正常上电。Led灯闪意味着网关已经准备好连接Wi-Fi了。";
			case LANG_RUS:
				return "Убедитесь, что шлюз вставлен в розетку. Зажженный LED индикатор " + " означает готовность подключения к WiFi";
			case LANG_ROM:
				return "Asigurati-va ca Gateway-ul este instalat corespunzator si alimentat de la priza. Clipitul intermitent, rapid al LEDului" + "inseamna ca este gata pentru conectarea Wi-Fi.";
			default:
				return "Be sure the gateway was installed and powered in right way. Flashing Led " + "means it is ready for Wi-Fi connection.";
		}
	}

	//gateway_tip two bottom
	owner.label_gateway_tip_two_bottom = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please back to App. once gateway's Wi-Fi connected.";
			case LANG_CN:
				return "一旦网关Wi-Fi连接后，请返回App。";
			case LANG_RUS:
				return "Вернитесь в приложение, если шлюз подключен к WiFi";
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
				return "网关已连接？下一步！";
			case LANG_RUS:
				return "Шлюз зарегистрирован? Перейдите далее!";
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
				return "Please enter Wi-Fi name";
			case LANG_CN:
				return "请输入WI-FI账号";
			case LANG_RUS:
				return "Пожалуйста, введите Wi-Fi";
			case LANG_ROM:
				return "Introduceti numele retelei de Wi-Fi";
			default:
				return "Please enter Wi-Fi name";
		}
	}

	//gateway_tip three
	owner.label_gateway_tip_three = function(language) {
		switch (language) {
			case LANG_EN:
				return "Register gateway on wireless router by typing your Wi-Fi name and password.";
			case LANG_CN:
				return "输入你的Wi-Fi账号和密码，在无线路由上注册网关。";
			case LANG_RUS:
				return "Зарегистрируйте Шлюз в сети WiFi. Введите название и пароль домашней сети WiFi";
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
				return "Please connect route's Wi-Fi! Back to App once route's Wi-Fi connected." + "Check gateway's connection again before adding devices on App.";
			case LANG_CN:
				return "请连接路由Wi-Fi,连接后请返回App.添加设备之前需要检查网关连接状态.";
			case LANG_RUS:
				return "Пожалуйста подключитесь к Wi-Fi. Вернитесь в приложение после подключения к Wifi." + " Проверьте подключение шлюза перед добавлением устройств";
			case LANG_ROM:
				return "Va rugam sa va reintoarceti in aplicatie dupa conectarea Gateway-ului." + "Verificati conectarea Gateway-ului la reteaua Wi-Fi inaintea adaugarii unui echipament nou.";
			default:
				return "Please connect route's Wi-Fi! Back to App once route's Wi-Fi connected." + "Check gateway's connection again before adding devices on App.";
		}
	}

	//connect network
	owner.label_connect_network = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connect route Wi-Fi";
			case LANG_CN:
				return "连接路由Wi-Fi";
			case LANG_RUS:
				return "Подключить WiFi";
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
			case LANG_RUS:
				return "Проверьте соединение со Шлюзом";
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
				return "Failed to configure route Wi-Fi to gateway.";
			case LANG_CN:
				return "配置路由Wi-Fi信息到网关失败。";
			case LANG_RUS:
				return "Ошибка передачи данных WiFi в шлюз.";
			case LANG_ROM:
				return "Conectarea Gateway-ului la reteaua Wi-Fi, esuata.";
			default:
				return "Failed to configure route Wi-Fi to gateway.";
		}
	}

	//bind gateway success
	owner.label_bindgateway_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway registration succeed!";
			case LANG_CN:
				return "网关注册成功!";
			case LANG_RUS:
				return "Шлюз зарегистрирован!";
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
				return "Gateway can not be online. Please register gateway nearby wireless router.";
			case LANG_CN:
				return "网关不能上线。请在无线路由器旁边配置网关。";
			case LANG_RUS:
				return "Шлюз недоступен. Уменьшите рассояние до шлюза";
			case LANG_ROM:
				return "Conectarea la Gateway, esuata! Va rugam sa apropiati echipamentul de Gateway!";
			default:
				return "Gateway can not be online. Please register gateway nearby wireless router.";
		}
	}
	
	//close_valve
	owner.label_valve_close = function(language) {
		switch (language) {
			case LANG_EN:
				return "Close valve";
			case LANG_CN:
				return "关闭阀门";
			case LANG_RUS:
				return "Клапан закрыт";
			case LANG_ROM:
				return "Inchidere electrovalva";
			default:
				return "Close valve";
		}
	}

	//danger
	owner.label_danger = function(language) {
		switch (language) {
			case LANG_EN:
				return "Danger";
			case LANG_CN:
				return "危险";
			case LANG_RUS:
				return "Опасность";
			case LANG_ROM:
				return "<font size='2px'>ATENTIE! Scurgere Gaze!</font>";
			default:
				return "Danger";
		}
	}

	//danger desc
	owner.label_danger_desc = function(language) {
		switch (language) {
			case LANG_EN:
				return "Danger";
			case LANG_CN:
				return "危险";
			case LANG_RUS:
				return "Опасность";
			case LANG_ROM:
				return "ATENTIE!<br/>Scurgere Gaze!";
			default:
				return "Danger";
		}
	}

	//safe
	owner.label_safe = function(language) {
		switch (language) {
			case LANG_EN:
				return "Safe";
			case LANG_CN:
				return "安全";
			case LANG_RUS:
				return "Безопасно";
			case LANG_ROM:
				return "<font size='2px'>Alimentare gaze: OK</font>";
			default:
				return "Safe";
		}
	}
	owner.label_safe_desc = function(language) {
		switch (language) {
			case LANG_EN:
				return "Safe";
			case LANG_CN:
				return "安全";
			case LANG_RUS:
				return "Безопасно";
			case LANG_ROM:
				return "Gaze: OK";
			default:
				return "Safe";
		}
	}
	owner.label_btn_all_clear = function(language) {
		switch (language) {
			case LANG_EN:
				return "All Clear";
			case LANG_CN:
				return "临时解除";
			case LANG_RUS:
				return "Очистить все";
			case LANG_ROM:
				return "Dezactivat temporar!";
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
			case LANG_RUS:
				return "Помощь";
			case LANG_ROM:
				return "Ajutor";
			default:
				return "Help";
		}
	}
	owner.label_alerm_record = function(language) {
		switch (language) {
			case LANG_EN:
				return "Alarm Record";
			case LANG_CN:
				return "报警记录";
			case LANG_RUS:
				return "Журнал ошибок";
			case LANG_ROM:
				return "Inregistrarile alarmelor";
			default:
				return "Alarm Record";
		}
	}
	owner.label_equipment_number = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device ID";
			case LANG_CN:
				return "设备编号";
			case LANG_RUS:
				return "Номер устройства";
			case LANG_ROM:
				return "Numarul echipamentului";
			default:
				return "Device ID";
		}
	}
	owner.label_gas_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gas Detected";
			case LANG_CN:
				return "可检测气体名称";
			case LANG_RUS:
				return "Газ";
			case LANG_ROM:
				return "Tip gaz detectat";
			default:
				return "Gas Detected";
		}
	}

	//close valve confirm
	owner.label_close_valve_confirm = function(language) {
		switch (language) {
			case LANG_EN:
				return "Must manually open the valve once it was closed, be sure to close the valve?";
			case LANG_CN:
				return "阀门关闭后，需要手动打开。确认关闭阀门吗？";
			case LANG_RUS:
				return "Потребуется открывать клапан вручную! Вы уверены, что хотите закрыть клапан?";
			case LANG_ROM:
				return "Doriti inchiderea valvei? Odata inchisa, aceasta se poate deschide doar manual!";
			default:
				return "Must manually open the valve once it was closed, be sure to close the valve?";
		}
	}

	//Update Now
	owner.label_update_now = function(language) {
		switch (language) {
			case LANG_EN:
				return "Update";
			case LANG_CN:
				return "更新";
			case LANG_RUS:
				return "Обновить";
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
				return "Download file";
			case LANG_CN:
				return "下载文件";
			case LANG_RUS:
				return "Загрузить файл";
			case LANG_ROM:
				return "Descarca fisier";
			default:
				return "Download file";
		}
	}

	//download failed
	owner.label_download_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Download failed";
			case LANG_CN:
				return "下载失败";
			case LANG_RUS:
				return "Ошибка загрузки";
			case LANG_ROM:
				return "Descarcare esuata!";
			default:
				return "Download failed";
		}
	}
	//install success
	owner.label_install_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Installation succeed, reboot now!";
			case LANG_CN:
				return "更新成功，即将重启!";
			case LANG_RUS:
				return "Установлено, требуется перезагрузка";
			case LANG_ROM:
				return "Instalarea aplicatiei a reusit! Puteti rula aplicatia.";
			default:
				return "Installation succeed, reboot now!";
		}
	}

	//install failed
	owner.label_install_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Installation failed.";
			case LANG_CN:
				return "安装失败.";
			case LANG_RUS:
				return "Ошибка установки.";
			case LANG_ROM:
				return "Instalare esuata!";
			default:
				return "Installation failed.";
		}
	}

	//link ap failed
	owner.label_link_ap_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connect gateway failed, please confirm Wi-Fi connection!";
			case LANG_CN:
				return "连接网关失败，请确认是否连接Wi-Fi！";
			case LANG_RUS:
				return "Ошибка соединения шлюза. Пожалуйста подключитесь к wifi！";
			case LANG_ROM:
				return "Conectarea Gateway-ului a esuat! Va rugam sa reincercati conectarea la reteaua Wi-Fi!";
			default:
				return "Connect gateway failed, please confirm Wi-Fi connection!";
		}
	}

	//link wrong ap
	owner.label_link_wrong_ap = function(language) {
		switch (language) {
			case LANG_EN:
				return "You have linked a wrong Wi-Fi. Please link ";
			case LANG_CN:
				return "您连接了一个错误的Wi-Fi。请连接：";
			case LANG_RUS:
				return "Вы соединились с другой Wifi сетью";
			case LANG_ROM:
				return "V-ati conectat la o alta retea Wi-Fi! Va rugam sa va conectati la ";
			default:
				return "You have linked a wrong Wi-Fi. Please link ";
		}
	}

	//link wifi failed
	owner.label_link_wifi_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Your phone can not connect network. Please change to a workable Wi-Fi.";
			case LANG_CN:
				return "您的手机不能上网。请切换至可用Wi-Fi。";
			case LANG_RUS:
				return "Ваш телефон не соединен с сетью. Пожалуйста смените Wifi";
			case LANG_ROM:
				return "Telefonul nu se poate conecta la aceasta retea. Va rugam sa schimbati reteaua si sa incercati din nou!";
			default:
				return "Your phone can not connect network. Please change to a workable Wi-Fi.";
		}
	}

	//ap link wifi error2
	owner.label_linkwifi_error2 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Link Wi-Fi failed.";
			case LANG_CN:
				return "连接Wi-Fi失败。";
			case LANG_RUS:
				return "Ошибка Wi-Fi соединения.";
			case LANG_ROM:
				return "Conectarea la reteaua Wi-Fi a esuat!";
			default:
				return "Link Wi-Fi failed.";
		}
	}

	//ap link wifi error3   成功
	owner.label_linkwifi_error3 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Link Wi-Fi succeed.";
			case LANG_CN:
				return "连接Wi-Fi成功。";
			case LANG_RUS:
				return "Ошибка WiFi соединения.";
			case LANG_ROM:
				return "Conectarea la reteaua Wi-Fi a reusit!";
			default:
				return "Link Wi-Fi succeed.";
		}
	}

	//ap link wifi error4
	owner.label_linkwifi_error4 = function(language) {
		switch (language) {
			case LANG_EN:
				return "The Wi-Fi configuration is error!";
			case LANG_CN:
				return "Wi-Fi配置信息错误。";
			case LANG_RUS:
				return "Ошибка настроек wifi!";
			case LANG_ROM:
				return "Configuratia de acces la reteaua Wi-Fi este eronata!";
			default:
				return "The Wi-Fi configuration is error!";
		}
	}

	//ap link wifi error6
	owner.label_linkwifi_error6 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Unable to parse server's DNS.";
			case LANG_CN:
				return "无法解析服务器DNS。";
			case LANG_RUS:
				return "Невозможно подключиться к DNS серверу.";
			case LANG_ROM:
				return "Imposibil de rezolvat DNS server.";
			default:
				return "Unable to parse server's DNS.";
		}
	}

	//choose weekday
	owner.label_choose_weekday = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please choose weekday.";
			case LANG_CN:
				return "请选择日期。";
			case LANG_RUS:
				return "Выберите день недели.";
			case LANG_ROM:
				return "Va rugam sa alegeti ziua din saptamana.";
			default:
				return "Please choose weekday.";
		}
	}

	//deviceid
	owner.label_deviceid = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device ID";
			case LANG_CN:
				return "设备ID";
			case LANG_RUS:
				return "ID устройства";
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
			case LANG_RUS:
				return "Настройка";
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
				return "Check gateway's network status.";
			case LANG_CN:
				return "检查网关联网状态.";
			case LANG_RUS:
				return "Проверка соединения шлюза.";
			case LANG_ROM:
				return "In curs de conectare cu Gateway-ul.";
			default:
				return "Check gateway's network status.";
		}
	}

	//check gateway status
	owner.label_check_gateway_status = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check gateway's return status.";
			case LANG_CN:
				return "检查网关返回状态";
			case LANG_RUS:
				return "Проверка обратной связи со шлюзом";
			case LANG_ROM:
				return "In curs de conectare cu Gateway-ul.";
			default:
				return "Check gateway's return status.";
		}
	}

	//check gateway status fail
	owner.label_check_gateway_status_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Failed to check gateway's return status.";
			case LANG_CN:
				return "检查网关返回状态失败。";
			case LANG_RUS:
				return "Ошибка обратной связи со шлюзом.";
			case LANG_ROM:
				return "Conectarea Gateway-ului la serverul central a esuat!";
			default:
				return "Failed to check gateway's return status.";
		}
	}

	//check gateway status fail
	owner.label_gateway_notreceive = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway didn't receive the command to add device.";
			case LANG_CN:
				return "网关未接收到添加设备信息。";
			case LANG_RUS:
				return "Шлюз не получает команду на добавление устройства.";
			case LANG_ROM:
				return "Gateway-ul nu primeste comanda de a adauga un echipament nou.";
			default:
				return "Gateway didn't receive the command to add device.";
		}
	}

	//type id manually
	owner.label_type_id_manually = function(language) {
		switch (language) {
			case LANG_EN:
				return "Type device ID manually.";
			case LANG_CN:
				return "手动输入设备ID.";
			case LANG_RUS:
				return "Ввести вручную ID устройства.";
			case LANG_ROM:
				return "Introduceti manual seria.";
			default:
				return "Type device ID manually.";
		}
	}

	//label step3
	owner.label_step3 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start registration";
			case LANG_CN:
				return "开始注册";
			case LANG_RUS:
				return "Регистрация";
			case LANG_ROM:
				return "Incepeti inregistrarea";
			default:
				return "Start registration";
		}
	}

	//add_radiator
	owner.label_add_radiator = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add Radiator Controller";
			case LANG_CN:
				return "添加温控阀";
			case LANG_RUS:
				return "Добавить радиаторный термостат";
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
			case LANG_RUS:
				return "Добавить синализатор газа";
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
			case LANG_RUS:
				return "Удаление";
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
			case LANG_RUS:
				return "Отмена удержания";
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
			case LANG_RUS:
				return "Зона";
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
			case LANG_RUS:
				return "Время";
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
				return "Delete succeed.";
			case LANG_CN:
				return "删除成功。";
			case LANG_RUS:
				return "Удалено.";
			case LANG_ROM:
				return "Stergere reusita.";
			default:
				return "Delete succeed.";
		}
	}

	//删除失败
	owner.label_delete_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Delete failed.";
			case LANG_CN:
				return "删除失败。";
			case LANG_RUS:
				return "Ошибка удаления.";
			case LANG_ROM:
				return "Stergere esuata.";
			default:
				return "Delete failed.";
		}
	}
	// 手动输入
	owner.label_manual_input = function(language) {
		switch (language) {
			case LANG_EN:
				return "Manually type";
			case LANG_CN:
				return "手动输入";
			case LANG_RUS:
				return "Ручной ввод";
			case LANG_ROM:
				return "Introducere manuala";
			default:
				return "Manually type";
		}
	}
	//
	owner.label_generator = function(language) {
		switch (language) {
			case LANG_EN:
				return "Generator";
			case LANG_CN:
				return "发电";
			case LANG_RUS:
				return "Генератор";
			case LANG_ROM:
				return "Incarcare termoelectrica";
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
			case LANG_RUS:
				return "Радиаторный термостат";
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
			case LANG_RUS:
				return "Экономия энергии";
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
				return "Manually fine-turning";
			case LANG_CN:
				return "手动微调";
			case LANG_RUS:
				return "Ручная точная";
			case LANG_ROM:
				return "Reglaj manual fin";
			default:
				return "Manually fine-turning";
		}
	}
	owner.label_check_by_self = function(language) {
		switch (language) {
			case LANG_EN:
				return "Self-Test";
			case LANG_CN:
				return "自检";
			case LANG_RUS:
				return "Самодиагностика";
			case LANG_ROM:
				return "Testare functionare";
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
			case LANG_RUS:
				return "Концентрация";
			case LANG_ROM:
				return "Concentratie gaz";
			default:
				return "Concentration";
		}
	}
	owner.label_alerm_valve_value = function(language) {
		switch (language) {
			case LANG_EN:
				return "Alarm triggering point";
			case LANG_CN:
				return "燃气报警浓度设定";
			case LANG_RUS:
				return "Уровень тревоги";
			case LANG_ROM:
				return "Nivel alarma concentratie gaz";
			default:
				return "Alarm triggering point";
			}
	}
	owner.label_get_gas_valve_info_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Get Gas valve's info. failed!";
			case LANG_CN:
				return "获取燃气阀信息失败!";
			case LANG_RUS:
				return "Не удалось получить информацию газового клапана";
			case LANG_ROM:
				return "Preluarea statusului valvei de oprire gaz, esuata!";
			default:
				return "Get Gas valve's info. failed!";
		}
	}
	owner.label_buzzer = function(language) {
		switch (language) {
			case LANG_EN:
				return "Buzzer:";
			case LANG_CN:
				return "蜂鸣器:";
			case LANG_RUS:
				return "Зуммер";				
			case LANG_ROM:
				return "Sirena avertizare:";
			default:
				return "Buzzer:";
		}
	}

	owner.label_valve_openstatus = function(language) {
		switch (language) {
			case LANG_EN:
				return "Valve openning status";
			case LANG_CN:
				return "阀开度";
			case LANG_RUS:
				return "Состояние клапана";
			case LANG_ROM:
				return "Status deschidere valva radiator";
			default:
				return "Valve openning status";
		}
	}
	owner.label_check_gateway_online = function(language) {
		switch (language) {
			case LANG_EN:
				return "Check if there is online gateway in the location.";
			case LANG_CN:
				return "检查当前区域内是否有网关在线.";
			case LANG_RUS:
				return "Проверьте наличие подключенного шлюза поблизости.";
			case LANG_ROM:
				return "Verifica existenta vreunui Gateway online in locatie.";
			default:
				return "Check if there is online gateway in the location.";
		}
	}
	owner.label_no_gateway_online = function(language) {
		switch (language) {
			case LANG_EN:
				return "There is no online gateway.";
			case LANG_CN:
				return "没有在线网关.";
			case LANG_RUS:
				return "Нет подключенного шлюза.";
			case LANG_ROM:
				return "In zona nu se afla niciun Gateway online.";
			default:
				return "There is no online gateway.";
		}
	}

	//energy info error
	owner.label_energy_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "Energy info. is error.";
			case LANG_CN:
				return "能耗信息错误.";
			case LANG_RUS:
				return "Ошибка информации.";
			case LANG_ROM:	
				return "Informatia despre energie este eronata.";
			default:
				return "Energy info. is error.";
		}
	}

	//能量消耗
	owner.label_energy_consume = function(language) {
		switch (language) {
			case LANG_EN:
				return "Energy Consumption";
			case LANG_CN:
				return "能量消耗";
			case LANG_RUS:
				return "Потребление энергии";
			case LANG_ROM:
				return "Consumul de energie";
			default:
				return "Energy Consumption";
		}
	}

	//能量消耗
	owner.label_energy_type = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Total Consumption', 'RF Consumption', 'Moto Consumption', 'Standby Consumption', 'Other Consumption'];
			case LANG_CN:
				return ['消耗总计', '通讯耗能', '执行耗能', '系统耗能', '其他耗能'];
			case LANG_RUS:
				return ['Всего', 'Радиосигнал', 'Энергия', 'Режим ожидания', 'Прочее'];
			case LANG_ROM:
				return ['Consum total', 'Consum RF', 'Consum motor', 'Consum in Standby', 'Alt consum'];
			default:
				return ['Total Consumption', 'RF Consumption', 'Moto Consumption', 'Standby Consumption', 'Other Consumption'];
		}
	}

	//edit
	owner.label_edit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Edit";
			case LANG_CN:
				return "编辑";
			case LANG_RUS:
				return "Редактировать";
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
				return "Please choose a location.";
			case LANG_CN:
				return "请选择区域.";
			case LANG_RUS:
				return "Выберите местоположение.";
			case LANG_ROM:
				return "Va rugam sa selectati o locatie.";
			default:
				return "Please choose a location.";
		}
	}

	//locate name
	owner.label_locate_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location Name";
			case LANG_CN:
				return "区域名称";
			case LANG_RUS:
				return "Название местоположения";
			case LANG_ROM:
				return "Numele locatiei";
			default:
				return "Location Name";
		}
	}

	//locate name empty
	owner.label_locate_name_empty = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please enter location name";
			case LANG_CN:
				return "请输入区域名称";
			case LANG_RUS:
				return "Введите название местоположения";
			case LANG_ROM:
				return "Introduceti numele locatiei";
			default:
				return "Please enter location name";
		}
	}

	//locate name short
	owner.label_locate_name_too_short = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location name is too short! The valid length is 2~20";
			case LANG_CN:
				return "区域名称太短!有效长度是2~20";
			case LANG_RUS:
				return "Название местоположения слишком короткое. 2-20 символов";
			case LANG_ROM:
				return "Numele locatiei este prea scurt (lungimea acceptata are intre 2 si 20 caractere).";
			default:
				return "Location name is too short! The valid length is 2~20";
		}
	}

	//locate name long
	owner.label_locate_name_too_long = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location name is too long! The valid length is 2~20";
			case LANG_CN:
				return "区域名称太长!有效长度是2~20";
			case LANG_RUS:
				return "Название местоположения слишком длинное. 2-20 символов";
			case LANG_ROM:
				return "Numele locatiei este prea lung (lungimea acceptata are intre 2 si 20 caractere).";
			default:
				return "Location name is too long! The valid length is 2~20";
		}
	}

	//add fail
	owner.label_add_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add failed.";
			case LANG_CN:
				return "添加失败.";
			case LANG_RUS:
				return "Ошибка добавления.";
			case LANG_ROM:
				return "Adaugare esuata.";
			default:
				return "Add failed.";
		}
	}

	//can't delete default locate
	owner.label_not_delete_default_locate = function(language) {
		switch (language) {
			case LANG_EN:
				return "Can not delete default location.";
			case LANG_CN:
				return "不能删除默认区域.";
			case LANG_RUS:
				return "Невозможно удалить расположение по умолчанию.";
			case LANG_ROM:
				return "Locatia implicita nu poate fi stearsa.";
			default:
				return "Can not delete default location.";
		}
	}

	//can't delete locate
	owner.label_not_delete_locate = function(language) {
		switch (language) {
			case LANG_EN:
				return "Can not delete the location which has gateway.";
			case LANG_CN:
				return "不能删除拥有网关的区域.";
			case LANG_RUS:
				return "Невозможно удалить расположение соответствующее Шлюзу.";
			case LANG_ROM:
				return "Nu poate fi stearsa o locatie cu Gateway-uri declarate in acea locatie.";
			default:
				return "Can not delete the location which has gateway.";
		}
	}

	//set timezone
	owner.label_set_timezone = function(language) {
		switch (language) {
			case LANG_EN:
				return "Set gateway's timezone";
			case LANG_CN:
				return "设置网关时区信息";
			case LANG_RUS:
				return "Выберите часовой пояс шлюза";
			case LANG_ROM:
				return "Setati fusul orar pentru Gateway";
			default:
				return "Set gateway's timezone";
		}
	}
	owner.array_datetime_picker_labels = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Y', 'M', 'D', 'H', 'Min'];
			case LANG_CN:
				return ['年', '月', '日', '时', '分'];
			case LANG_RUS:
				return ['Г', 'М', 'Д', 'Ч', 'Мин'];
			case LANG_ROM:
				return ['An', 'Luna', 'Zi', 'Ora', 'Min'];
			default:
				return ['Y', 'M', 'D', 'H', 'Min'];
		}
	}
	owner.array_confirm_buttons = function(language) {
		switch (language) {
			case LANG_EN:
				return ['Cancel', 'OK'];
			case LANG_CN:
				return ['取消', '确定'];
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
				return "Phone is not connected with a wireless network！ please connect phone with a wireless network before the operation.";
			case LANG_CN:
				return "手机未连接到无线网络，请连接到无线网络后再操作";			
			case LANG_RUS:
				return "Телефон не подключен к беспроводной сети, подключите к беспроводной сети";
			case LANG_ROM:
				return "Telefonul nu este conectat la reteaua Wi-Fi din locatia selectata. Reincercati dupa conectarea la reteaua Wi-Fi din locatia selectata.";
			default:
				return "Phone is not connected with a wireless network！ please connect phone with a wireless network before the operation.";
		}
	}
	owner.msg_connection_unknow = function(language) {
		switch (language) {
			case LANG_EN:
				return "Current network connection is unknown, check the network connection.";
			case LANG_CN:
				return "当前网络连接状态未知，请检查网络连接.";			
			case LANG_RUS:
				return "Неизвестный статус соединения, проверьте сетевое соединение.";
			case LANG_ROM:
				return "Statusul conectarii la retea este necunoscut. Verificati conectarea la retea.";
			default:
				return "Current network connection is unknown, check the network connection.";
		}
	}
	owner.msg_connection_none = function(language) {
		switch (language) {
			case LANG_EN:
				return "No connection with network, please check the network connection.";
			case LANG_CN:
				return "网络未连接，请检查网络连接.";			
			case LANG_RUS:
				return "Сеть недоступна, проверьте сетевое подключение.";
			case LANG_ROM:
				return "Reteaua nu este conectata. Verificati conectarea la retea.";
			default:
				return "No connection with network, please check the network connection.";
		}
	}
	owner.msg_connection_cell2G = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to 2G.";
			case LANG_CN:
				return "网络已切换为蜂窝数据2G.";			
			case LANG_RUS:
				return "Подключено к сети 2G.";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea mobila 2G.";
			default:
				return "Network has been switched to 2G.";
		}
	}
	owner.msg_connection_cell3G = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to 3G.";
			case LANG_CN:
				return "网络已切换为蜂窝数据3G.";				
			case LANG_RUS:
				return "Подключено к сети 3G.";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea mobila 3G.";
			default:
				return "Network has been switched to 3G.";
		}
	}
	owner.msg_connection_cell4G = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to 4G.";
			case LANG_CN:
				return "网络已切换为蜂窝数据4G.";			
			case LANG_RUS:
				return "Подключено к сети 4G.";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea mobila 4G.";
			default:
				return "Network has been switched to 4G.";
		}
	}
	owner.msg_connection_wifi = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network has been switched to Wi-Fi.";
			case LANG_CN:
				return "网络已切换为无线信号.";			
			case LANG_RUS:
				return "Подключено к радиосигналу.";
			case LANG_ROM:
				return "Tocmai v-ati conectat la o retea Wi-Fi.";
			default:
				return "Network has been switched to Wi-Fi";
		}
	}
	owner.title_auto_config = function(language) {
		switch (language) {
			case LANG_EN:
				return "Auto Configuration.";
			case LANG_CN:
				return "一键配置.";				
			case LANG_RUS:
				return "Автоматическая настройка.";
			case LANG_ROM:
				return "Autoconfigurare.";
			default:
				return "Auto Configuration.";
		}
	}
	owner.label_wifi_signal = function(language) {
		switch (language) {
			case LANG_EN:
				return "Wi-Fi signal";
			case LANG_CN:
				return "WIFI 信号";				
			case LANG_RUS:
				return "Сигнал Wifi";
			case LANG_ROM:
				return "Nivel semnal Wi-Fi";
			default:
				return "Wi-Fi signal";
		}
	}
	owner.label_gateway_mac = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway's mac ID";
			case LANG_CN:
				return "网关mac";			
			case LANG_RUS:
				return "MAC Шлюза";
			case LANG_ROM:
				return "Mac-ul Gateway-ului";
			default:
				return "Gateway's mac ID";
		}
	}
	owner.label_start_config = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Configuring";
			case LANG_CN:
				return "开始配置";				
			case LANG_RUS:
				return "Начало настройки";
			case LANG_ROM:
				return "Pornire configurare";
			default:
				return "Start Configuring";
		}
	}
	owner.label_config_title_start = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Configuration ...";
			case LANG_CN:
				return "开始配置 ...";			
			case LANG_RUS:
				return "Начало настройки...";
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
			case LANG_RUS:
				return "Настройка...";
			case LANG_ROM:
				return "Se configureaza...";
			default:
				return "Configuring ...";
		}
	}
	owner.msg_gateway_connection_timeout = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway connection timeout!";
			case LANG_CN:
				return "网关连接超时!";
			case LANG_RUS:
				return "Ожидание подключения шлюза!";
			case LANG_ROM:
				return "Timpul alocat pentru conectarea cu Gateway-ul a expirat!";
			default:
				return "Gateway connection timeout!";
		}
	}
	owner.msg_gateway_connection_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway connection timeout!";
			case LANG_CN:
				return "网关连接超时!";
			case LANG_RUS:
				return "Ошибка подключения шлюза!";
			case LANG_ROM:
				return "Conectarea Gateway-ului a esuat!";
			default:
				return "Gateway connection timeout!";
		}
	}
	owner.msg_connecting_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connecting Gateway ...";
			case LANG_CN:
				return "连接网关 ...";
			case LANG_RUS:
				return "Соединение со Шлюзом";
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
			case LANG_RUS:
				return "Получение IP-адреса ...";
			case LANG_ROM:
				return "Obtinere adresa IP...";
			default:
				return "Obtaining IP address ...";
		}
	}
	owner.msg_gateway_connection_status_checked = function(language) {
		switch (language) {
			case LANG_EN:
				return "checking gateway connection status...";
			case LANG_CN:
				return "验证网关连接状态 ...";
			case LANG_RUS:
				return "Состояние подключения шлюза проверяется ...";
			case LANG_ROM:
				return "Se verifica statusul conectarii gateway-ului...";
			default:
				return "checking gateway connection status...";
		}
	}
	owner.msg_configuring_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Configuring gateway ...";
			case LANG_CN:
				return "配置网关 ...";
			case LANG_RUS:
				return "Настройка шлюза ...";
			case LANG_ROM:
				return "Gateway-ul se configureaza...";
			default:
				return "Configuring gateway ...";
		}
	}
	owner.msg_checking_for_gateway_networking_state = function(language) {
		switch (language) {
			case LANG_EN:
				return "Checking gateway's networking state ...";
			case LANG_CN:
				return "验证网关联网状态 ...";
			case LANG_RUS:
				return "Проверка сетевого состояния шлюза ...";
			case LANG_ROM:
				return "Se verifica statusul retelei proprii a gateway-ului...";
			default:
				return "Checking gateway's networking state ...";
		}
	}
	owner.msg_connecting_wifi = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connecting Wi-Fi ...";
			case LANG_CN:
				return "连接Wi-Fi ...";
			case LANG_RUS:
				return "Подключение к сети Wifi ...";
			case LANG_ROM:
				return "Se conecteaza la reteaua Wi-Fi ...";
			default:
				return "Connecting Wi-Fi ...";
		}
	}
	owner.msg_start_verify_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start gateway verification ...";
			case LANG_CN:
				return "开始验证网关 ...";
			case LANG_RUS:
				return "Начало проверки шлюза ...";
			case LANG_ROM:
				return "Se verifica functionarea Gateway-ului...";
			default:
				return "Start gateway verification ...";
		}
	}
	owner.msg_get_information_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Obtaining gateway information ...";
			case LANG_CN:
				return "获取网关信息 ...";
			case LANG_RUS:
				return "Получение информации ...";
			case LANG_ROM:
				return "Se primesc informatii actualizate de la gateway...";
			default:
				return "Obtaining gateway information";
		}
	}
	owner.msg_being_successful_gateway_info = function(language) {
		switch (language) {
			case LANG_EN:
				return "Obtaining gateway information succeed.";
			case LANG_CN:
				return "获取网关信息成功.";
			case LANG_RUS:
				return "Информация поступает от шлюза.";
			case LANG_ROM:
				return "Se primesc informatii de la Gateway.";
			default:
				return "Obtaining gateway information succeed.";
		}
	}
	owner.msg_start_bind_gateway = function(language) {
		switch (language) {
			case LANG_EN:
				return "Start Configuring gateway ...";
			case LANG_CN:
				return "开始绑定网关 ...";
			case LANG_RUS:
				return "Запустите привязку шлюза ...";
			case LANG_ROM:
				return "Se incepe comunicarea cu Gateway-ul...";
			default:
				return "Start Configuring gateway ...";
		}
	}
	owner.msg_wifi_connected_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Connect Wi-Fi failed.";
			case LANG_CN:
				return "连接Wi-Fi失败";
			case LANG_RUS:
				return "Ошибка Wifi соединения";
			case LANG_ROM:
				return "Conexiunea cu reteaua Wi-Fi, esuata!";
			default:
				return "Connect Wi-Fi failed.";
		}
	}
	owner.msg_friendly_reminder = function(language) {
		switch (language) {
			case LANG_EN:
				return "Try to make your router, mobile phones and devices closer to each other.";
			case LANG_CN:
				return "尽量使您的路由器、手机和设备互相靠近。";
			case LANG_RUS:
				return "Пожалуйста, разместите Ваш роутер, смартфон и устройства ближе друг к другу.";
			case LANG_ROM:
				return "Apropiati intre ele telefonul, routerul si echipamentele!";
			default:
				return "Try to make your router, mobile phones and devices closer to each other.";
		}
	}
	owner.msg_configuration_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Configuration succeed!";
			case LANG_CN:
				return "配置成功!";
			case LANG_RUS:
				return "Настройка завершена!";
			case LANG_ROM:
				return "Configurarea a reusit!";
			default:
				return "Configuration succeed!";
		}
	}
	owner.msg_configuration_failed = function(language) {
		switch (language) {
			case LANG_EN:
				return "Configuration failed!\nPlease try again!";
			case LANG_CN:
				return "配置失败\n请重新尝试一次！";				
			case LANG_RUS:
				return "Конфигурация не удалось!\n Попробуйте еще раз!";
			case LANG_ROM:
				return "Configurarea a esuat. \n Reincercati din nou!";
			default:
				return "Configuration failed!\nPlease try once again!";
		}
	}
	owner.array_button_array_yes_or_no = function(language) {
		switch (language) {
			case LANG_EN:
				return ['No', 'Yes'];
			case LANG_CN:
				return ['否', '是'];
			case LANG_RUS:
				return ['Нет', 'Да'];
			case LANG_ROM:
				return ['Nu', 'Da']
			default:
				return ['No', 'Yes'];
		}
	}
	owner.title_precautions = function(language) {
		switch (language) {
			case LANG_EN:
				return "";
			case LANG_CN:
				return "";
			case LANG_RUS:
				return "";
			case LANG_ROM:
				return "";
			default:
				return "";
		}
	}
	owner.msg_configuration_confirm = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please conform following issues before Configuring gateway: \n1. make sure gateway is under Paring Mode(LED blink slowly); \n2. make sure  mobile phone is connected with 2.4G Wi-Fi;\n3. make sure Wi-Fi account and password is correct; \n4. make sure strange Mac ID is not forbided by your wireless router;    \n5. make sure gateway has not been set the AP isolation; \n6. the recommended visible distance between wireless router and gateway is 2M; click [Yes] to continue paring,click [No] to cancle.";
			case LANG_CN:
				return "配对前请确认：\n1.您的网关设备已进入自动配对模式（LED灯慢速闪烁）。\n2.您手机连接的wifi网络处于2.4g的频段。\n3.您选择的wifi及输入连接wifi的密码是正确的。\n4.您的路由器没有禁止陌生mac地址接入。\n5.您的路由器没有设置AP隔离。\n6.建议网关与无线路由器之间的可视距离不超过2M.\n点击“是”进行配对，点击“否”取消配对。";
			case LANG_RUS:
				return "Пожалуйста, проверьте перед добавлением шлюза следующее:\n1. убедитесь, что шлюз в режиме сопряжения (светодиод мигает медленно); \n2. убедитесь, что мобильный телефон подключен к 2.4G Wi-Fi;\n3.  убедитесь, что логин Wi-Fi и пароль правильные; \n4. убедитесь, что Mac ID не запрещен у беспроводного маршрутизатора; \n5.  убедитесь, что шлюз не был изолирован роутером \n6. рекомендованная видимое расстояние между беспроводным маршрутизатором и шлюзом 2М; продолжите или отмените сопряжение";
			case LANG_ROM:
				return "Va rugam sa verificati: \n1. ca Gateway-ul a intrat in procedura de interconectare (LEDul clipeste lent, intermitent); \n2. ca telefonul mobil este conectat la reteaua Wi-Fi din locatia selectata, in banda de 2.4GHz (802.11 b/g); \n3. ca ati introdus parola corecta pentru accessul in reteaua Wi-Fi; \n4. ca nu aveti restrictii declarate in setarile router-ului vizavi de blocarea conectarii unor device-uri (blocarea unor adrese MAC); \n5. ca modul “AP Isolation” nu este activ pe router-ul dvs.; \n6. ca distanta intre Gateway si router-ul wireless sa fie pe durata interconectarii de 1-3m si fara obstacole intre cele 2 echipamente.\nContinuati?";
			default:
				return "Please conform following issues before Configuring gateway: \n1. make sure gateway is under Paring Mode(LED blink slowly); \n2. make sure  mobile phone is connected with 2.4G Wi-Fi;\n3. make sure Wi-Fi account and password is correct; \n4. make sure strange Mac ID is not forbided by your wireless router;    \n5. make sure gateway has not been set the AP isolation; \n6. the recommended visible distance between wireless router and gateway is 2M; click [Yes] to continue paring,click [No] to cancle.";
		}
	}
	owner.msg_repower_try_again = function(language) {
		switch (language) {
			case LANG_EN:
				return " Please try again after re-powered the device.";
			case LANG_CN:
				return "请将设备重新上电后重试。";
			case LANG_RUS:
				return "После перезагрузки устройства, попробуйте еще раз";
			case LANG_ROM:
				return "Dupa restartul echipamentelor incercati din nou.";
			default:
				return "Please try again after re-powered the device";
		}
	}
	owner.msg_loging = function(language) {
		switch (language) {
			case LANG_EN:
				return "Logging in...";
			case LANG_CN:
				return "登录中...";
			case LANG_RUS:
				return "Вход в систему...";
			case LANG_ROM:
				return "Se conecteaza...";
			default:
				return "Logging in...";
		}
	}
	owner.msg_sel_end_time_error = function(language) {
		switch (language) {
			case LANG_EN:
				return "End-time selection error!";
			case LANG_CN:
				return "结束时间选择有误!";
			case LANG_RUS:
				return "Выбранное время окончания неверно!";
			case LANG_ROM:
				return "Ora de sfarsit este incorecta!";
			default:
				return "End-time selection error!";
		}
	}
	owner.msg_mac_must_to_be_hex = function(language) {
		switch (language) {
			case LANG_EN:
				return "Device ID must be consist of the following characters (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F).";
			case LANG_CN:
				return "设备ID必须由以下字符组成（0，1，2，3，4，5，6，7，8，9，A，B，C，D，E，F）。";				
			case LANG_RUS:
				return "ID устройства должно содержать символы (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F).";
			case LANG_ROM:
				return "Seria echipamentului este compusa din caracterele 0-9, A-F";
			default:
				return "Device ID must be consist of the following characters (0,1,2,3,4,5,6,7,8,9, A, B, C, D, E, F).";
		}
	}
	owner.msg_week_device_need_wait = function(language, times) {
		switch (language) {
			case LANG_EN:
				return "The device is in deep sleep！ Wake it up needs around " + times + " minutes.";
			case LANG_CN:
				return "设备处于深度睡眠状态，唤醒设备大约需要等待" + times + "分钟的时间。";			
			case LANG_RUS:
				return "Устройство в режиме ожидания, включите устройство и ожидайте " + times + " минут.";
			case LANG_ROM:
				return "Echipamentul are functiile oprite. Pentru repornirea functiilor aveti de asteptat " + times + " minute.";
			default:
				return "he device is in deep sleep！ Wake it up needs around " + times + " minutes.";
		}
	}
	owner.msg_press_again_to_exit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Press again to exit.";
			case LANG_CN:
				return "再按一次退出应用";			
			case LANG_RUS:
				return "Нажмите еще раз для выхода из приложения";
			case LANG_ROM:
				return "Apasati inca odata pentru a iesi din aplicatie";
			default:
				return "Press again to exit.";
		}
	}
	owner.msg_confirm_logout = function(language) {
		switch (language) {
			case LANG_EN:
				return "Log out?";
			case LANG_CN:
				return "确定退出登录？";			
			case LANG_RUS:
				return "Выйти?";
			case LANG_ROM:
				return "Parasiti aplicatia?";
			default:
				return "Log out?";
		}
	}
	owner.msg_demo_can_not_add = function(language) {
		switch (language) {
			case LANG_EN:
				return "DEMO account can not add the device!";
			case LANG_CN:
				return "DEMO 账号不支持设备添加！";			
			case LANG_RUS:
				return "В Демо режиме невозможно добавить устройство";
			case LANG_ROM:
				return "Contul de demonstrativ nu permite adaugarea echipamentelor!";
			default:
				return "DEMO account can not add the device!";
		}
	}
	owner.msg_has_none_changed = function(language) {
		switch (language) {
			case LANG_EN:
				return "No change to submit!";
			case LANG_CN:
				return "未修改配置项，无须提交！";			
			case LANG_RUS:
				return "Вы не сделали изменений, нет необходимости в подтверждении";
			case LANG_ROM:
				return "Nu ati modificat nimic si de aceea nicio informatie nu a fost transmisa.";
			default:
				return "No change to submit!";
		}
	}
	owner.label_name_preparationg = function(language) {
		switch (language) {
			case LANG_EN:
				return "Preparation";
			case LANG_CN:
				return "准备";			
			case LANG_RUS:
				return "Подготовка";
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
			case LANG_RUS:
				return "Wi-Fi соединение";
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
			case LANG_RUS:
				return "Проверка соединения";
			case LANG_ROM:
				return "Verificare conexiune";
			default:
				return "Connection Check";
		}
	}
	owner.tip_preparationg = function(language) {
		switch (language) {
			case LANG_EN:
				return "Before adding gateway, please plug in the gateway, make it under Paring Mode by long pressing the button until it's LED blinking slowly.";
			case LANG_CN:
				return "添加网关前，请将网关插入电源插座，并长按网关顶部按钮，直至LED灯进入慢闪对码状态。";
			case LANG_RUS:
				return "Перед добавлением Шлюза, пожалуйста, вставьте его в розетку и включите режим сопряжения";
			case LANG_ROM:
				return "Inainte de adaugarea Gateway-ului in Aplicatie, va rugam sa introduceti Gateway-ul in priza si apoi sa il aduceti in modul de interconectare prin atingerea cca. 7 secunde a iconitei de pe acesta (cea care simbolizeaza o casa), pana cand LED-ul incepe sa clipeasca lent, intermitent.";
			default:
				return "Before adding gateway, please plug in the gateway, make it under Paring Mode by long pressing the button until it's LED blinking slowly.";
		}
	}
	owner.tip_connection_check = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please check gateway's connection by pressing below button:<br/>it means a good connection if gateway's LED lights up at the same time when below button's light on.";
			case LANG_CN:
				return "请点击下方图片对网关的连接情况进行确认：<br/>当下方按钮灯亮时，如果网关的LED灯也同时亮起，则说明网关当前连接状况良好。";
			case LANG_RUS:
				return "Пожалуйста, проверьте соединение шлюза нажатием кнопки ниже. Одновременное мигание LED индикатора на шлюзе говорит о хорошем соединении";
			case LANG_ROM:
				return "Verificati reusita conectarii Gateway-ului prin apasarea butonului de mai jos (o conexiune reusita este semnalizata prin aprinderea LED-ului de pe Gateway simultan cu apasarea butonului din aplicatie).";
			default:
				return "Please check gateway's connection by pressing below button:<br/>it means a good connection if gateway's LED lights up at the same time when below button's light on.";
		}
	}
	owner.msg_wifi_connection_success = function(language) {
		switch (language) {
			case LANG_EN:
				return "Congratulations! your gateway addition is succeed！ please go and check the connection situation.";
			case LANG_CN:
				return "恭喜您！网关添加成功！去看看它的连接情况吧！";
			case LANG_RUS:
				return "Поздравляем! Шлюз добавлен! Проверьте работу соединения";
			case LANG_ROM:
				return "Configurarea Gateway-ului a reusit! Verificati in pasul urmator reusita conectarii.";
			default:
				return "Congratulations! your gateway addition is succeed！ please go and check the connection situation.";
		}
	}
	owner.msg_please_input_gateway_name = function(language) {
		switch (language) {
			case LANG_EN:
				return "Please name the gateway!";
			case LANG_CN:
				return "请输入网关的名字";
			case LANG_RUS:
				return "Введите название шлюза!";
			case LANG_ROM:
				return "Introduceti denumirea gateway-ului";
			default:
				return "Please name the gateway!";
		}
	}
	owner.label_detection_of_gas = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gas detecting";
			case LANG_CN:
				return "检测气体";
			case LANG_RUS:
				return "ГАЗ";
			case LANG_ROM:
				return "Tip gaz detectat";
			default:
				return "Gas detecting";
		}
	}
	owner.msg_add_device_finished = function(language) {
		switch (language) {
			case LANG_EN:
				return "it is trying to build connection between gateway and device, please be patient before it shows up automatically.";
			case LANG_CN:
				return "设备正在尝试与网关建立连接。\n提示：请检查设备上电情况，如果设备已经上电，请耐心等待设备会自动上线。";
			case LANG_RUS:
				return "идет попытка создания соединения между шлюзом и устройством, пожалуйста, будьте терпеливы, это займет некоторое время.";
			case LANG_ROM:
				return "Echipamentul se conecteaza cu Gateway-ul, va rugam sa asteptati sa fie afisat in Aplicatie.";
			default:
				return "it is trying to build connection between gateway and device, please be patient before it shows up automatically.";
		}
	}
	owner.array_choice_button = function(language) {
		switch (language) {
			case LANG_EN:
				return ["FAQ", "Try again"];
			case LANG_CN:
				return ["FAQ帮助", "重新尝试"];
			case LANG_RUS:
				return ["FAQ", "Еще раз"];
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
			case LANG_RUS:
				return "График температуры";
			case LANG_ROM:
				return "Graficul temperaturii";
			default:
				return "Temperature curve";
		}
	}
	owner.label_power_curve = function(language) {
		switch (language) {
			case LANG_EN:
				return "Electricity generation curve";
			case LANG_CN:
				return "发电曲线";
			case LANG_RUS:
				return "График мощности";
			case LANG_ROM:
				return "Graficul incarcarii acumulatorului termostatului de radiator";
			default:
				return "Electricity generation curve";
		}
	}
	owner.label_voltage = function(language) {
		switch (language) {
			case LANG_EN:
				return "Voltage";
			case LANG_CN:
				return "电压";
			case LANG_RUS:
				return "Напряжение";
			case LANG_ROM:
				return "Tensiunea (V)";
			default:
				return "Voltage";
		}
	}
	owner.label_last_day = function(language) {
		switch (language) {
			case LANG_EN:
				return "Latest 24 Hours";
			case LANG_CN:
				return "最近24小时";
			case LANG_RUS:
				return "За 24 часа";
			case LANG_ROM:
				return "Ultimele 24 ore";
			default:
				return "Latest 24 Hours";
		}
	}
	owner.label_last_week = function(language) {
		switch (language) {
			case LANG_EN:
				return "Latest Week";
			case LANG_CN:
				return "最近一周";
			case LANG_RUS:
				return "За неделю";
			case LANG_ROM:
				return "Saptamana trecuta";
			default:
				return "Latest Week";
		}
	}
	owner.title_alerm_messages = function(language) {
		switch (language) {
			case LANG_EN:
				return "Messages";
			case LANG_CN:
				return "消息列表";
			case LANG_RUS:
				return "Сообщения";
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
			case LANG_RUS:
				return "Сообщение";
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
			case LANG_RUS:
				return "Превышено время ожидания обновления";
			case LANG_ROM:
				return "Timpul alocat pentru actualizare a fost depasit. Reincercati!";
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
			case LANG_RUS:
				return ['Отмена', 'Справка', 'Попробовать другой способ'];
			case LANG_ROM:
				return ['Anulare', 'FAQ', 'Incearca altfel'];
			default:
				return ['Cancel', 'FAQ', 'Try other ways'];
		}
	}
	
	owner.msg_smart_config_failure = function(language) {
		switch (language) {
			case LANG_EN:
				return "Adding gateway failed. Please check [FAQ] for help. Or try again after re-plug gateway.";
			case LANG_CN:
				return "配置失败：请查看FAQ获取帮助。或将智能网关重新上电后，再次尝试配置。";
			case LANG_RUS:
				return "Ошибка добавления шлюза. Изучите инструкцию еще раз, затем, попробуйте снова, после выключения и включения шлюза.";
			case LANG_ROM:
				return "Adaugarea unui nou gateway a esuat. Puteti reincerca din nou acum sau dupa un restart al echipamentelor.";
			default:
				return "Adding gateway failed. Please check [FAQ] for help. Or try again after re-plug gateway.";
		}
	}
	
	owner.msg_ap_config_failure = function(lang_options) {
		switch (language) {
			case LANG_EN:
				return "Adding gateway failed: server cannot be connected as gateway has failed on DNS resolution. Please contact with local customer service or supplier by email(support@poersmart.com.";
			case LANG_CN:
				return "配置失败：智能网关解析DNS失败，无法连接到服务器。请您联系当地客服或邮件联系供应商(support@poersmart.com)。";
			case LANG_RUS:
				return "Неудачное подключения шлюза, из-за ошибки DNS сервера либо шлюза. Пожалуйста, свяжитесь с ближайшим сервисцентром или производителем по e-mail: suport@poersmart.com";
			case LANG_ROM:
				return "Adaugarea unui nou gateway a esuat din cauza imposibilitatii setarii DNSului. Contactati-ne la suport@poersmart.ro";
			default:
				return "Adding gateway failed: server cannot be connected as gateway has failed on DNS resolution. Please contact with local customer service or supplier by email(support@poersmart.com.";
		}
	}

	owner.msg_sc_config_fail = function (language) {
		switch (language) {
			case LANG_EN:
				return "Pairing failed! please re-power the gateway and click 【Try Again】.";
			case LANG_CN:
				return "配置失败！请将网关重新上电，然后点击【重试】按钮，再次尝试网关配置。";
			case LANG_RUS:
				return "Сопряжение не удалось! пожалуйста, выключите и включите шлюз, нажмите 【Попробовать еще раз】.";
			case LANG_ROM:
				return "Adaugarea unui nou gateway a esuat. Puteti reincerca din nou acum sau dupa un restart al echipamentelor.";
			default:
				return "Pairing failed! please re-power the gateway and click 【Try Again】.";
		}
	}

	owner.array_button_for_sc_config_fail = function (language) {
		switch (language) {
			case LANG_EN:
				return ["Try Again", "Cancel"];
			case LANG_CN:
				return ["重试", "取消"];
			case LANG_RUS:
				return ["Попробовать еще раз", "Отмена"];
			case LANG_ROM:
				return ["Reincearca", "Anulare"]
			default:
				return ["Try Again", "Cancel"];
		}
	}

	owner.label_try_again = function (language) {
		switch (language) {
			case LANG_EN:
				return "Try Again";
			case LANG_CN:
				return "再试一次";
			case LANG_RUS:
				return "Попробуйте еще раз";
			case LANG_ROM:
				return "Reincearca";
			default:
				return "Try Again";
		}
	}

	owner.msg_config_timeout = function (language) {
		switch (language) {
			case LANG_EN:
				return "Configuration timeout, please try again.";
			case LANG_CN:
				return "配置超时，请重试一次。";
			case LANG_RUS:
				return "Время настройки истекло, пропробуйте еще раз.";
			case LANG_ROM:
				return "Configurarea a depasit timpul alocat. Reincearca...";
			default:
				return "Configuration timeout, please try again.";
		}
	}

	owner.msg_send_order_finished = function (language) {
		switch (language) {
			case LANG_EN:
				return "Completed instructions release.";
			case LANG_CN:
				return "指令下发完成.";
			case LANG_RUS:
				return "Соблюдайте указанные инструкции.";
			case LANG_ROM:
				return "Instructiuni transmise.";
			default:
				return "Completed instructions release.";
		}
	}
	owner.msg_faq = function (language){
		switch (language) {
			case LANG_EN:
				return "<ul><li>Please confirm  the gateway is under paring mode (LED is blinking slowly).</li><li>Please confirm your mobile phone is connected with Wi-Fi  under 2.4G(802.11 b/g wireless router).</li><li>Please confirm to enter the correct Wi-Fi password.</li><li>Please confirm  the wireless router does not  forbid unfamiliar Mac ID .</li><li>Please confirm “AP Isolation” is not setted on your wireless router.</li><li>Distance between gateway and wireless router should not be longer than 1m.</li></ul>";
			case LANG_CN:
				return "<ul><li>请确保网关进入对码状态（LED为慢闪状态）。</li><li>请确保您手机连接的wifi网络处于2.4g的频段。 </li><li>请确保您输入连接wifi的密码是正确的。 </li><li>请确保您的路由器没有禁止陌生mac地址接入。 </li><li>请确保您的路由器没有设置AP隔离。 </li><li>建议网关与无线路由器之间的可视距离不超过1M.</li></ul>";
			case LANG_RUS:
				return "<ul><li>Пожалуйста, проверьте, находится ли шлюз в режиме сопряжения (Индикатор мигает медленно)</li><li>Пожалуйста, убедитесь, подключен ли ваш смартфон к сети 2.4G Wi-Fi (802.11 b/g точке доступа)</li><li>Пожалуйста, проверьте, правильный ли Wi-Fi пароль</li><li>Пожалуйста, проверьте, не запрещено ли подключение неизвестным Mac ID к Вашему роутеру</li><li>Пожалуйста, проверьте, не включено ли «Изоляция точки доступа» на Вашем роутере</li><li>Рекомендованное расстояние между шлюзом и роутером не более метра.</li></ul>";
			case LANG_ROM:
				return "In situatia in care interconectarea Gateway-ului esueaza, verificati urmatoarele: \n1. ca Gateway-ul a intrat in procedura de interconectare (LEDul de pe Gateway clipeste lent, intermitent); \n2. ca telefonul mobil pe care ruleaza Aplicatia este conectat la Wi-Fi in banda de 2.4GHz (802.11 b/g); \n3. ca ati introdus parola corecta pentru accessul in reteaua Wi-Fi; \n4. ca nu aveti restrictii declarate in setarile router-ului vizavi de blocarea conectarii unor device-uri (blocarea unor adrese MAC); \n5. ca modul “AP Isolation” nu este activ pe router-ul dvs.; \n6. ca distanta intre Gateway si router-ul wireless sa fie pe durata interconectarii de 1-3m si fara obstacole intre cele 2 echipamente.";
			default:
				return "<ul><li>Please confirm  the gateway is under paring mode (LED is blinking slowly).</li><li>Please confirm your mobile phone is connected with Wi-Fi  under 2.4G(802.11 b/g wireless router).</li><li>Please confirm to enter the correct Wi-Fi password.</li><li>Please confirm  the wireless router does not  forbid unfamiliar Mac ID .</li><li>Please confirm “AP Isolation” is not setted on your wireless router.</li><li>Distance between gateway and wireless router should not be longer than 1m.</li></ul>";
		}
	}
	
	//gateway test failed 
	owner.label_gateway_test_failed = function(language){
		switch (language) {
			case LANG_EN:
				return "Connention network setTimeout, please try again!";
			case LANG_CN:
				return "网络延迟，请重试！";
			case LANG_RUS:
				return "Таймаут сети, пожалуйста, попробуйте снова!";
            case LANG_ROM:
				return "Timpul de conectare a expirat.";
			default:
				return "Connention network setTimeout, please try again!";
		}
	}
	
	//choice_mac_address
	owner.choice_mac_address = function(language){
		switch (language) {
			case LANG_EN:
				return "Select gateway Mac ID";
			case LANG_CN:
				return "Select gateway Mac";
			case LANG_RUS:
				return "Выберите Mac Address шлюза";
			case LANG_ROM:
				return "Cod Gateway";
			default:
				return "Select gateway Mac ID";
		}
	}
	//无法从路由器获取动态ip地址
	owner.msg_errstatus_1 = function(language){
		switch (language) {
			case LANG_EN:
				return "Trying to access the router, but can not get dynamic IP address.";
			case LANG_CN:
				return "尝试接入路由器，无法获取动态ip地址。";
			case LANG_RUS:
				return "Попробуйте получить доступ к роутеру, невозможно получить IP адрес от роутера";
			case LANG_ROM:
				return "Verifica ca routerul sa fie setat pentru alocarea dinamica a IPurilor.";
			default:
				return "Trying to access the router, but can not get dynamic IP address.";
		}
	}
	
	//无法从路由器获取动态ip地址
	owner.msg_errstatus_2 = function(language){
		switch (language) {
			case LANG_EN:
				return "Unable to obtain dynamic IP address from the router.";
			case LANG_CN:
				return "无法从路由器获取动态ip地址。";
			case LANG_RUS:
				return "Невозможно получить IP адрес от роутера.";
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
				return " Successfully connected to router";
			case LANG_CN:
				return "成功连接到路由器";
			case LANG_RUS:
				return "Успешноеподключение к роутеру";
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
			case LANG_RUS:
				return "Ошибка настройки беспроводной сети либо неправильный пароль.";
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
			case LANG_RUS:
				return "Ошибка DNS.";
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
				return "Gateway operation error, please re-plug.";
			case LANG_CN:
				return "网关内部错误，请重新上电。";
			case LANG_RUS:
				return "Ошибка управления шлюзом, необходима перезагрузка.";
			case LANG_ROM:
				return "Eroare in functionarea Gateway-ului, scoateti-l si reintroduceti-l in priza pentru a il restarta!";
			default:
				return "Gateway operation error, please re-plug.";
		}
	}
	//未知错误
	owner.msg_errstatus_default = function(language){
		switch (language) {
			case LANG_EN:
				return "unknown error, please contact customer service.";
			case LANG_CN:
				return "未知错误，请联系客服。";
			case LANG_RUS:
				return "Неизвестная ошибка, свяжитесь с разработчиком.";
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
			case LANG_RUS:
				return "Удаление";
			case LANG_ROM:
				return "Sterge";
			default:
				return "Delete All";
		}
	}
	owner.msg_wake_up_remind = function(language) {
		switch (language) {
			case LANG_EN:
				return "The device is dormant currently, it takes a few minutes to wake-up , please wait a moment.";
			case LANG_CN:
				return "目前设备处于休眠状态，唤醒需要几分钟，请稍等片刻。";
			case LANG_RUS:
				return "Устройство в режиме ожидания, пробуждение займет несколько минут. Пожалуйста, подождите.";
			case LANG_ROM:
				return "Echipamentul este in sleep mode, conectarea va dura cateva minute, va rugam asteptati.";
			default:
				return "The device is dormant currently, it takes a few minutes to wake-up , please wait a moment.";
		}
	}
	//修改密码返回错误信息
	owner.label_change_password_result1 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Change password failed";
			case LANG_CN:
				return "修改密码失败";
			case LANG_ROM:
				return "parola";
			case LANG_RUS:
				return "Смена пароля не удалась";
			default:
				return "Change password failed";
		}
	}	
	
	owner.label_change_password_result2 = function(language) {
		switch (language) {
			case LANG_EN:
				return "Current password error";
			case LANG_CN:
				return "当前密码错误";
			case LANG_ROM:
				return "în prezent";
			case LANG_RUS:
				return "Неверный пароль";
			default:
				return "Current password error";
		}
	}	
	owner.msg_loading = function(language){
		switch (language) {
			case LANG_EN:
				return "loading";
			case LANG_CN:
				return "加载中";
			case LANG_RUS:
				return "Загрузка";
			case LANG_ROM:
				return "Incarcare program...";
			default:
				return "loading";
		}
	}
	//shutdown模式
	owner.label_shutdown = function(language) {
		switch (language) {
			case LANG_EN:
				return "Shutdown";
			case LANG_CN:
				return "关机";
			case LANG_RUS:
				return "остановка";
			case LANG_ROM:
				return "oprirea";
			default:
				return "Shutdown";
		}
	}
	
	owner.label_canceloverride = function(language) {
		switch (language) {
			case LANG_EN:
				return "Cancel Override";
			case LANG_CN:
				return "取消越控";
			case LANG_RUS:
				return "Отмена управления";
			case LANG_ROM:
				return "Anulare mod Program modificat";
			default:
				return "Cancel Override";
		}
	}
	
	owner.label_add_is_full = function(language) {
		switch (language) {
			case LANG_EN:
				return "Add failed cause this gateway has already connected with 10devices. you may [Check] the gateway's devices list,  and delete some devices if necessary; or you may [Add] another gateway.";
			case LANG_CN:
		return "网关已添加10台设备，当前设备添加失败！您可以点击下面的[Check]按钮学习如何查看网关配置的设备列表，必要时可以删除部分配置的设备。或者您可以点击[Add]按钮添加新的网关，以添加新的设备。";
			case LANG_RUS:
				return "Подключение невозможно т.к. к данному шлюзу уже подключено 10 устройств. Вы можете [Проверить] список устройств шлюза,  и удалить некоторые устройства, если необходимоand; либо Вы можете [добавить] другой Wi-Fi шлюз.";
			case LANG_ROM:
				return "<font size='1px'>Adaugarea unui nou echipament la acest Gateway a esuat deoarece exista deja 10 echipamente conectate. Puteti verifica [Check] lista de echipamente conectate la acest Gateway si puteti sterge din acestea sau puteti adauga un Gateway suplimentar</font>";
			default:
				return "Add failed cause this gateway has already connected with 10devices. you may [Check] the gateway's devices list,  and delete some devices if necessary; or you may [Add] another gateway.";
		}
	}
	
	owner.msg_change_local = function(language) {
		switch (language) {
			case LANG_EN:
				return "Location is switching.";
			case LANG_CN:
				return "切换区域中。";
			case LANG_RUS:
				return "Подключение к зоне отопления.";
			case LANG_ROM:
				return "In curs de schimbare a locatiei...";
			default:
				return "Location is switching.";
		}
	}
	
	owner.label_change_false = function(language) {
		switch (language) {
			case LANG_EN:
				return "Switch location failed, please try again.";
			case LANG_CN:
				return "切换区域失败，请重新尝试";
			case LANG_RUS:
				return "Подключение к зоне отопления не удалось, попробуйте еще раз.";
			case LANG_ROM:
				return "Trecerea la locatia selectata a esuat!";
			default:
				return "Switch location failed, please try again.";
		}
	}
	
	//温度单位
	owner.label_app_temp_unit = function(language) {
		switch (language) {
			case LANG_EN:
				return "Temp. Unit";
			case LANG_CN:
				return "温度单位";
			case LANG_RUS:
				return "Ед. измерения температуры";
			case LANG_ROM:
				return "Unitati temperatura";
			default:
				return "Temp. Unit";
		}
	}
	
	owner.label_FAQ_title1 = function(language) {
		switch (language) {
			case LANG_EN:
				return "How to find out gateway's devices list?";
			case LANG_CN:
				return "如何查看网关的设备配置列表？";
			case LANG_RUS:
				return "Как найти список подключенных устройств к Wi-Fi шлюзу?";
			case LANG_ROM:
				return "Cum pot gasi lista echipamentelor conectate la un Gateway?";
			default:
				return "How to find out gateway's devices list?";
		}
	}
	
	owner.label_FAQ_note1 = function(language) {
		switch (language) {
			case LANG_EN:
				return "1. Plug the gateway in socket;<br/>2. Find out poer gateway's Wi-Fi on PC or Tablet, and connnect your PC or Tablet with it's Wi-Fi;<br/>3. Open link http://192.168.4.1, on Device page, you will find a devices list which connected with this gateway.";
			case LANG_CN:
				return "1.网关重新上电；2.通过笔记本电脑发现珀尔网关的WI-FI信号，并与之连接；3.在浏览器中输入http://192.168.4.1，打开该链接，您能够在设备列表页面上找到已配置的设备mac地址列表。";
			case LANG_RUS:
				return "1. Вставьте Wi-Fi шлюз в розетку;<br/>2. Найдите появившуюся точку доступа Wi-Fi шлюза при помощи ПК или планшета, подключите Ваш ПК или планшет к появившейся новой точке доступа Wi-Fi;<br/>3. Перейдите по ссылке http://192.168.4.1, на страницу устройства, Вы найдете список устройств, подключенных к данному Wi-Fi шлюзу.";
			case LANG_ROM:
				return "<font size='1px'>1. Introduceti in priza Gateway-ul;<br/>2. Cautati pe laptop sau tableta/telefon reteaua Wi-Fi a Gateway-ului;<br/>3. Deschideti in browser adresa http://192.168.4.1 iar in pagina Device page veti gasi lista echipamenteor conectate la acel Gateway</font>";
			default:
				return "1. Plug the gateway in socket;<br/>2. Find out poer gateway's Wi-Fi on PC or Tablet, and connnect your PC or Tablet with it's Wi-Fi;<br/>3. Open link http://192.168.4.1, on Device page, you will find a devices list which connected with this gateway.";
		}
	}
	
	owner.error_ajax = function(language) {
		switch (language) {
			case LANG_EN:
				return "Network anomaly, please try again.";
			case LANG_CN:
				return "网络异常，请重新尝试";
			case LANG_RUS:
				return "Cеть аномалия , попробуйте еще раз.";
			case LANG_ROM:
				return "Anomalia, Reincercati din nou.";
			default:
				return "Network anomaly, please try again.";
		}
	}
	
	owner.ErrRelatedToOtherLocate = function(language) {
		switch (language) {
			case LANG_EN:
				return "Gateway to other regions have been bound";
			case LANG_CN:
				return "已经绑定网关到其他区域";
			case LANG_RUS:
				return "в других регионах  уже  обязательный  шлюз ";
			case LANG_ROM:
				return "Gateway-ul este deja conectat in alta locatie! Stergeti-l de acolo pentru a il putea adauga in aceasta locatie!";
			default:
				return "Gateway to other regions have been bound";
		}
	}
	
	owner.ErrOther = function(language) {
		switch (language) {
			case LANG_EN:
				return "Unknown error";
			case LANG_CN:
				return "未知错误";
			case LANG_RUS:
				return "Неизвестная ошибка";
			case LANG_ROM:
				return "Tip de eroare necunoscut";
			default:
				return "Unknown error";
		}
	}

    owner.label_add_device_failed = function(language) {
        switch (language) {
            case LANG_EN:
                return "Adding device failed, please manually pair with gateway or add on app. once again.";
            case LANG_CN:
                return "添加设备失败.请再次手动与网关配对或添加."
            case LANG_RUS:
            	return "Добавление устройства не удалось, пожалуйста, еще раз подключите устройство к шлюзу вручную или через приложение.";
            case LANG_ROM:
                return "Adaugarea unui nou echipament a esuat, va rugam sa reincercati din Aplicatie sau prin procedura conectarii manuale.";
            default:
                return "Adding device failed, please manually pair with gateway or add on app. once again.";

        }
    }
	
	//
	owner.label_add_device_waitting = function(language){
		switch (language) {
			case LANG_EN:
				return "Is being added...";
			case LANG_CN:
				return "添加中...";
			case LANG_RUS:
				return "Добавление...";
			case LANG_ROM:
				return "adăugare...";
			default:
				return "Is being added...";
		}
	}
	
	
}(mui, window.poer_language = {}));
import { WalletMessages } from '../types'

const wallet: WalletMessages = {
  'wallet.nav.deposits': 'Вклады',
  'wallet.nav.bonds': 'Бонды',
  'wallet.nav.poolshares': 'Вклады',
  'wallet.column.name': 'Имя',
  'wallet.column.ticker': 'Тикер',
  'wallet.column.balance': 'Баланс',
  'wallet.action.send': 'Отправить',
  'wallet.action.upgrade': 'Обновить',
  'wallet.action.receive': 'Получить {asset}',
  'wallet.action.forget': 'Удалить',
  'wallet.action.unlock': 'Разблокировать',
  'wallet.action.import': 'Импортировать',
  'wallet.action.create': 'Создать',
  'wallet.action.connect': 'Подключить',
  'wallet.action.deposit': 'Вклад',
  'wallet.connect.instruction': 'Пожалуйста подключите ваш кошелек',
  'wallet.lock.label': 'Lock wallet - RU',
  'wallet.unlock.label': 'Unlock wallet - RU',
  'wallet.unlock.title': 'Разблокировать кошелек',
  'wallet.unlock.instruction': 'Пожалуйста разблокируйте ваш кошелек',
  'wallet.unlock.phrase': 'Введите ваш пароль',
  'wallet.unlock.error': 'Не получилось разблокировать кошелек. Пожалуйста, проверьте пароль и попробуйте еще раз',
  'wallet.imports.label': 'Import wallet - RU',
  'wallet.imports.phrase.title': 'Please enter the phrase of your wallet with a single space between the words - RU',
  'wallet.imports.wallet': 'Импортировать существующий кошелек',
  'wallet.imports.keystore.select': 'Выберите keystore файл',
  'wallet.imports.keystore.title': 'Выберите файл для загрузки',
  'wallet.imports.enterphrase': 'Введите фразу',
  'wallet.imports.error.instance': 'Не удалось создать экземпляр Клиента',
  'wallet.imports.error.keystore.load': 'Недопустимый Keystore',
  'wallet.imports.error.keystore.import': 'Неверный пароль',
  'wallet.txs.history': 'Transation history - RU',
  'wallet.phrase.error.valueRequired': 'Необходимо значение для фразы',
  'wallet.phrase.error.invalid': 'Неверная фраза',
  'wallet.phrase.error.import': 'Ошибка при импорте фразы',
  'wallet.empty.phrase.import': 'Импортировать существующий кошелек с балансом',
  'wallet.empty.phrase.create': 'Создать новый кошелек с балансом',
  'wallet.create.copy.phrase': 'Скопируйте фразу ниже',
  'wallet.create.title': 'Создать новый кошелек',
  'wallet.create.enter.phrase': 'Введите правильную фразу',
  'wallet.create.words.click': ' Выберите слова в правильном порядке',
  'wallet.create.error.phrase': 'Сохраните вашу фразу в надежном месте и введите ее в правильном порядке',
  'wallet.create.creating': 'Создание кошелька',
  'wallet.create.error': 'Ошибка при сохранении фрразы',
  'wallet.receive.address.error': 'Нет доступных адресов для получения',
  'wallet.receive.address.errorQR': 'Ошибка при создании QR-кода: {error}',
  'wallet.remove.label': 'Удалить кошелек',
  'wallet.remove.label.title': 'Вы уверены, что хотите удалить кошелек?',
  'wallet.remove.label.description':
    'Вы не сможете отменить это действие и вам нужно будет пересоздать кошелек посредством секретной фразы',
  'wallet.send.success': 'Тразакция завершена',
  'wallet.send.fastest': 'Быстро',
  'wallet.send.fast': 'Быстро',
  'wallet.send.average': 'Среднее',
  'wallet.errors.balancesFailed': 'Нет загруженных балансов. {errorMsg} (API Id: {apiId})',
  'wallet.errors.asset.notExist': 'Неправильный ассет {asset}',
  'wallet.errors.address.empty': 'Адрес не может быть путсым',
  'wallet.errors.address.invalid': 'Адес недействителен',
  'wallet.errors.address.couldNotFind': 'Не удалось найти адрес для пула {pool}',
  'wallet.errors.amount.shouldBeNumber': 'Количество должно быть числом',
  'wallet.errors.amount.shouldBeGreaterThan': 'Количество должно быть больше, чем {amount}',
  'wallet.errors.amount.shouldBeLessThanBalance': 'Количество должно быть меньше вашего баланса',
  'wallet.errors.amount.shouldBeLessThanBalanceAndFee':
    'Количество должно быть меньше, чем ваш баланс после вычета комисси',
  'wallet.errors.fee.notCovered': ' Комиссия не покрывается вашим банаслом ({balance})',
  'wallet.errors.invalidChain': 'Цепь недействительна',
  'wallet.password.confirmation': 'Подтверждение пароля',
  'wallet.password.confirmation.pending': 'Проверка пароля',
  'wallet.password.confirmation.error': 'Неверный пароль',
  'wallet.password.repeat': 'Повторите парроль',
  'wallet.password.mismatch': 'Пароли не совпадают',
  'wallet.send.error': 'Ошибка при отправке',
  'wallet.upgrade.pending': 'Обновление',
  'wallet.upgrade.success': 'Успещно обновили',
  'wallet.upgrade.error.loadPoolAddress': 'Не смогли закгрзить адрес для {pool} пула',
  'wallet.upgrade.error': 'Ошибка при обновлении',
  'wallet.upgrade.feeError': 'Комиссия для обновлния {fee} не покрывается вашим текущим балансом {balance}',
  'wallet.validations.lessThen': 'Должно быть меньше, чем {value}',
  'wallet.validations.graterThen': 'Должно быть больше, чем {value}',
  'wallet.validations.shouldNotBeEmpty': 'Не должно быть пустым'
}

export default wallet

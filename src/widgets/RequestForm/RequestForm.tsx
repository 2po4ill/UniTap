import React, { useState } from 'react';
import styles from './RequestForm.module.css';
import CustomInput from '../../shared/ui/CustomInput/CustomInput';

const initialState = {
  name: '',
  subject: '',
  email: '',
  phone: '',
  companySite: '',
  companyInn: '',
  cooperation: '',
  acceptTerms: false,
  acceptOffers: false,
};

const isFormValid = (form: typeof initialState) => {
  return (
    form.name.trim() !== '' &&
    form.subject.trim() !== '' &&
    form.email.trim() !== '' &&
    form.phone.trim() !== '' &&
    form.companySite.trim() !== '' &&
    form.companyInn.trim() !== '' &&
    form.cooperation.trim() !== '' &&
    form.acceptTerms
  );
};

const RequestForm: React.FC = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const placeholderWithAsterisk = (text: string) => (
    <>
      {text}
      <span style={{ color: 'var(--text-primary-error, #FF3B30)', marginLeft: 2 }}>*</span>
    </>
  );

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formGrid}>
        <div className={styles.formLeft}>
          <h2 className={styles.formTitle}>Оставьте заявку</h2>
          <p className={styles.formSubtitle}>
            Пожалуйста заполните все поля, чтобы мы смогли ответить вам как можно скорее
          </p>
        </div>
        <div className={styles.formRight}>
          <CustomInput
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholderElement={placeholderWithAsterisk('Как к вам обращаться')}
            className={styles.input}
            required
          />
          <CustomInput
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholderElement={placeholderWithAsterisk('Тема обращения')}
            className={styles.input}
            required
          />
          <CustomInput
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholderElement={placeholderWithAsterisk('E-mail')}
            className={styles.input}
            required
            type="email"
          />
          <CustomInput
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholderElement={placeholderWithAsterisk('Телефон')}
            className={styles.input}
            required
            type="tel"
          />
          <CustomInput
            name="companySite"
            value={form.companySite}
            onChange={handleChange}
            placeholderElement={placeholderWithAsterisk('Сайт компании')}
            className={styles.input}
            required
          />
          <CustomInput
            name="companyInn"
            value={form.companyInn}
            onChange={handleChange}
            placeholderElement={placeholderWithAsterisk('ИНН компании')}
            className={styles.input}
            required
          />
          <CustomInput
            as="textarea"
            name="cooperation"
            value={form.cooperation}
            onChange={handleChange}
            placeholderElement={placeholderWithAsterisk('Как вы видите наше сотрудничество?')}
            className={styles.textarea}
            required
            rows={4}
          />
          <div className={styles.checkboxes}>
            <label className={styles.checkboxLabel + ' ' + styles['checkboxLabel--nowrap']}>
              <input
                type="checkbox"
                className={styles.customCheckbox}
                name="acceptTerms"
                checked={form.acceptTerms}
                onChange={handleChange}
                required
              />
              <div className={styles.checkboxLabelText}> 
                <div>
                  Я принимаю <a href="#" target="_blank" rel="noopener noreferrer">Пользовательское соглашение</a> и <a href="#" target="_blank" rel="noopener noreferrer">Политику </a>
                  </div>
                  <div>
                <a href="#" target="_blank" rel="noopener noreferrer" className={styles.checkboxLabelTextLink}> конфиденциальности платформы</a>
                <span className={styles.requiredAsterisk}>*</span>
                </div>
                </div>
            </label>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                className={styles.customCheckbox}
                name="acceptOffers"
                checked={form.acceptOffers}
                onChange={handleChange}
              />
              Я хочу получать интересные предложения от платформы
            </label>
          </div>
          <button
            className={styles.submitButton}
            type="submit"
            disabled={!isFormValid(form)}
          >
            Получить консультацию
          </button>
        </div>
      </div>
    </form>
  );
};

function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  // Placeholder: send form data somewhere
  // You can move this function inside the component if you want
}

export default RequestForm; 
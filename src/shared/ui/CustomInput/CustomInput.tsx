import React, { useRef } from 'react';
import styles from './CustomInput.module.css';

interface CustomInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  placeholderElement: React.ReactNode;
  as?: 'input';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

interface CustomTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'value'> {
  placeholderElement: React.ReactNode;
  as: 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

type Props = CustomInputProps | CustomTextareaProps;

const CustomInput: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const showPlaceholder = !props.value;

  // Remove value and onChange from spread props
  const { value, onChange, placeholderElement, as, className, ...rest } = props;

  const wrapperClass = [
    styles.inputWrapper,
    className,
    as === 'textarea' ? styles.textareaWrapper : ''
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass}>
      {as === 'textarea' ? (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          className={styles.input}
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
          {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          className={styles.input}
          value={value}
          onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
          {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {showPlaceholder && (
        <div
          className={styles.placeholder}
          onClick={() => inputRef.current?.focus()}
        >
          {placeholderElement}
        </div>
      )}
    </div>
  );
};

export default CustomInput; 
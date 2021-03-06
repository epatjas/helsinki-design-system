import React, {
  ChangeEventHandler,
  CSSProperties,
  FC,
  forwardRef,
  ReactNode,
  Ref,
  TextareaHTMLAttributes,
} from 'react';

import styles from './TextInput.module.css';
import InputWrapper from '../../internal/input-wrapper/InputWrapper';

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /**
   * Additional class names to apply to the textarea
   */
  className?: string;
  /**
   * The default textarea element value. Use when the component is not controlled
   */
  defaultValue?: string;
  /**
   * If `true`, the textarea will be disabled
   */
  disabled?: boolean;
  /**
   * The helper text content that will be shown below the textarea
   */
  helperText?: string;
  /**
   * Hides the label above the textarea
   */
  hideLabel?: boolean;
  /**
   * The id of the textarea element
   */
  id: string;
  /**
   * If `true`, the textarea and `helperText` will be displayed in an invalid state.
   */
  invalid?: boolean;
  /**
   * The label for the textarea
   */
  label?: string | ReactNode;
  /**
   * **[DEPRECATED]** This prop will be removed in a future version. Use the `label` prop instead
   */
  labelText?: string;
  /**
   * Callback fired when the state is changed
   */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  /**
   * Short hint displayed in the textarea before the user enters a value
   */
  placeholder?: string;
  /**
   * If `true`, the label is displayed as required and the `textarea` element will be required
   */
  required?: boolean;
  /**
   * Override or extend the styles applied to the component. See text field [tokens](https://city-of-helsinki.github.io/helsinki-design-system/components/text-field#tokens) for available CSS variables
   */
  style?: CSSProperties;
  /**
   * The label of the tooltip
   */
  tooltipLabel?: string;
  /**
   * The text content of the tooltip
   */
  tooltipText?: string;
  /**
   * The title for the tooltip open button
   */
  tooltipOpenButtonLabelText?: string;
  /**
   * The title for the tooltip close button
   */
  tooltipCloseButtonLabelText?: string;
  /**
   * The value of the textarea element, required for a controlled component
   */
  value?: string;
  /**
   * The `ref` is forwarded to the native textarea element.
   */
  ref?: Ref<HTMLTextAreaElement>;
};

const TextArea: FC<TextAreaProps> = forwardRef(
  (
    {
      className = '',
      disabled = false,
      defaultValue,
      helperText,
      hideLabel,
      invalid,
      id,
      label,
      labelText,
      onChange = () => null,
      required,
      style,
      tooltipLabel,
      tooltipText,
      tooltipOpenButtonLabelText,
      tooltipCloseButtonLabelText,
      ...rest
    }: TextAreaProps,
    ref: Ref<HTMLTextAreaElement>,
  ) => {
    const wrapperProps = {
      className,
      helperText,
      hideLabel,
      id,
      invalid,
      label,
      labelText,
      required,
      style,
      tooltipLabel,
      tooltipText,
      tooltipOpenButtonLabelText,
      tooltipCloseButtonLabelText,
    };

    return (
      <InputWrapper {...wrapperProps}>
        <textarea
          className={styles.input}
          defaultValue={defaultValue}
          disabled={disabled}
          id={id}
          onChange={onChange}
          ref={ref}
          required={required}
          {...rest}
        />
      </InputWrapper>
    );
  },
);

export default TextArea;

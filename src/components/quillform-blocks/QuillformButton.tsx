import { useTheme } from '@quillforms/renderer-core';
import { css } from 'emotion';
import classnames from 'classnames';

export function QuillformButton({
  className,
  children,
  ...others
}: React.ButtonHTMLAttributes<any>) {
  const theme = useTheme();

  const buttonClassname = css`
    background-color: ${theme.buttonsBgColor};
    border-color: ${theme.buttonsBorderColor};
    border-radius: ${theme.buttonsBorderRadius}px;
    border-width: ${theme.buttonsBorderWidth}px;
    color: ${theme.buttonsFontColor};
    font-size: ${theme.buttonsFontSize.lg};
    padding: ${theme.buttonsPadding.top.lg} ${theme.buttonsPadding.right.lg};
  `;

  return (
    <button
      type="button"
      className={classnames(buttonClassname, className)}
      {...others}
    >
      {children}
    </button>
  );
}

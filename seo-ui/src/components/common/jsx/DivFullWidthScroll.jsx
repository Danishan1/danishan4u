import styles from "../css/DivFullWidthScroll.module.css";

export const DivFullWidthScroll = ({
  children,
  wrapperClassName,
  className,
  ...props
}) => {
  return (
    <div className={`${styles.divWrapper} ${wrapperClassName}`}>
      <div className={`${styles.divContainer} ${className}`} {...props}>
        {children}
      </div>
    </div>
  );
};

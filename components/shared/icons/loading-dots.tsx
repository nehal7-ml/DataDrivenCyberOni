import styles from "./loading-dots.module.css";

<<<<<<< HEAD
const LoadingDots = () => {
  return (
    <span className={styles.loading}>
      <span className={`bg-gray-900 dark:bg-gray-100`} />
      <span className={`bg-gray-900 dark:bg-gray-100`} />
      <span className={`bg-gray-900 dark:bg-gray-100`} />
=======
const LoadingDots = ({ color = "#000" }: { color?: string }) => {
  return (
    <span className={styles.loading}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
>>>>>>> upstream/main
    </span>
  );
};

export default LoadingDots;

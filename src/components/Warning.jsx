export default function Warning({ message }) {
  return message !== "" && <p className="warning">{message}</p>;
}

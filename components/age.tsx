export default function Age() {
  const birthday = new Date(1997, 1, 3); // February 3, 1997
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthday.getFullYear();

  // If the current date is before the birthday, subtract 1 from the age
  if (
    currentDate.getMonth() < birthday.getMonth() ||
    (currentDate.getMonth() === birthday.getMonth() &&
      currentDate.getDate() < birthday.getDate())
  ) {
    age--;
  }

  return <span>{age}</span>;
}

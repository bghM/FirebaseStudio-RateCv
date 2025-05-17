
interface EmailUserNameProps {
    name: string;
  }
  
  export default function EmailUserName({ name }: EmailUserNameProps) {
    return (
      <p className="text-lg font-bold mb-2">
        نورت يا {name} 🎉
      </p>
    );
  }
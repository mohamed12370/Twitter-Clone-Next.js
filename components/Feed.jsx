import { SparklesIcon } from '@heroicons/react/outline';
import Input from './Input';
import Post from './Post';

export default function Feed() {
  const posts = [
    {
      id: '1',
      name: 'mohamed mostafa',
      userName: 'mohamed12370',
      userImg: 'images/mohamed.jpeg',
      img: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      text: 'nice view!',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      name: 'mohamed mostafa',
      userName: 'mohamed12370',
      userImg: 'images/mohamed.jpeg',
      img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      text: 'wow!',
      timestamp: '2 days ago',
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 ">
        <h2 className="text-lg sm:text-xl font-black cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

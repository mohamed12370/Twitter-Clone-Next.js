import { async } from '@firebase/util';
import {
  ChartBarIcon,
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFiled } from '@heroicons/react/solid';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  setDoc,
} from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { signIn, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';
import { db, storage } from '../firebase';

export default function Post({ post }) {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [open, setOpen] = useRecoilState(modalState);

  useEffect(() => {
    const unsubscripe = onSnapshot(
      collection(db, 'posts', post.id, 'likes'),
      (snapshot) => setLikes(snapshot.docs)
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(
      likes.findIndex((like) => like.id === session?.user.uid) !== -1
    );
  }, [likes]);

  async function likePost() {
    if (session) {
      if (hasLiked) {
        await deleteDoc(doc(db, 'posts', post.id, 'likes', session?.user.uid));
      } else {
        setDoc(doc(db, 'posts', post.id, 'likes', session.user.uid), {
          username: session.user.username,
        });
      }
    } else {
      signIn();
    }
  }

  async function deletePost() {
    if (window.confirm('Are you Sure you want to delete this post ?')) {
      deleteDoc(doc(db, 'posts', post.id));
      if (post.data().image) {
        deleteObject(ref(storage, `posts/${post.id}/image`));
      }
    }
  }

  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200 overflow-hidden">
      {/* image */}
      <img
        className="w-11 h-11 rounded-full mr-4"
        src={post.data().userImg}
        alt={post.data().name}
      />
      {/* right side */}
      <div className="">
        {/* header */}
        <div className="flex items-center justify-between">
          {/* post user info */}
          <div className="flex items-center space-x-1 whitespace-nowrap">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.data().name}
            </h4>
            <span className="text-sm sm:text-[15px]">
              @{post.data().username} -{' '}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              <Moment fromNow>{post?.data().timestamp?.toDate()}</Moment>
            </span>
          </div>
          {/* dot icon */}
          <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500" />
        </div>
        {/* post text */}
        <p className="text-[15px] sm:text-[16px] text-gray-800 mb-2">
          {post.data().text}
        </p>
        {/* post imae  */}
        <img className="rounded-2xl mr-2 " src={post.data().image} alt="" />
        {/* icons */}
        <div className="flex justify-between text-gray-500 p-2">
          <ChatIcon
            onClick={() => setOpen(!open)}
            className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"
          />
          {session?.user.uid === post?.data().id && (
            <TrashIcon
              onClick={deletePost}
              className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
            />
          )}
          <div className="flex items-center">
            {hasLiked ? (
              <HeartIconFiled
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100"
              />
            ) : (
              <HeartIcon
                onClick={likePost}
                className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
              />
            )}
            {likes.length > 0 && (
              <span
                className={`${hasLiked && 'text-red-600'} text-sm select-none`}
              >
                {likes.length}
              </span>
            )}
          </div>

          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}

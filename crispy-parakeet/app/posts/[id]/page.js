import Layout from '@/app/navigation';
import { posts } from '../../data/posts';
import styles from './Post.module.css';

export default async function Post({ params }) {
    const { id } = await params;

    const post = posts.find(post => post.id === id);

    if (!post) {
        return <h1>Post Not Found</h1>
    }
    return (
        <Layout>
            <main className={styles.container}>
                <h1 className={styles.title}>{post.title}</h1>
                <p className={styles.content}>{post.content}</p>
            </main>
        </Layout>
    );
}
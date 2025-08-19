export const posts = [
    {
        id: 1,
        title: 'Как быть успешным и не идти по головам',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos maiores nobis quas, quia similique sunt voluptate. Aperiam autem blanditiis ex ipsum itaque libero maiores pariatur sed suscipit. Aliquid atque dolorum laudantium quaerat reiciendis vero voluptas! Consequatur laudantium nam, necessitatibus nemo quis recusandae sit vel? Adipisci beatae, cupiditate enim, esse, iste itaque minima nam necessitatibus nemo praesentium soluta tempora vitae! Accusamus consequuntur dolore enim id, itaque laudantium nam nostrum perspiciatis praesentium, quos tempora voluptates voluptatibus! Amet architecto autem beatae cum ducimus ipsa maxime minus. Cupiditate dolor harum laborum natus neque nostrum numquam quisquam quod sequi voluptatem. Aperiam culpa dolores magnam. Aliquid assumenda distinctio facilis iste maxime obcaecati quam quos saepe, soluta voluptatem?',
        author: '',
        date: '2025-08-19',
    },
    {
        id: 2,
        title: 'Преступление и наказание',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos maiores nobis quas, quia similique sunt voluptate. Aperiam autem blanditiis ex ipsum itaque libero maiores pariatur sed suscipit. Aliquid atque dolorum laudantium quaerat reiciendis vero voluptas! Consequatur laudantium nam, necessitatibus nemo quis recusandae sit vel? Adipisci beatae, cupiditate enim, esse, iste itaque minima nam necessitatibus nemo praesentium soluta tempora vitae! Accusamus consequuntur dolore enim id, itaque laudantium nam nostrum perspiciatis praesentium, quos tempora voluptates voluptatibus! Amet architecto autem beatae cum ducimus ipsa maxime minus. Cupiditate dolor harum laborum natus neque nostrum numquam quisquam quod sequi voluptatem. Aperiam culpa dolores magnam. Aliquid assumenda distinctio facilis iste maxime obcaecati quam quos saepe, soluta voluptatem?',
        author: '',
        date: '2025-08-19',
    },
    {
        id: 3,
        title: 'Limp Bizkit или Linkin Park?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos maiores nobis quas, quia similique sunt voluptate. Aperiam autem blanditiis ex ipsum itaque libero maiores pariatur sed suscipit. Aliquid atque dolorum laudantium quaerat reiciendis vero voluptas! Consequatur laudantium nam, necessitatibus nemo quis recusandae sit vel? Adipisci beatae, cupiditate enim, esse, iste itaque minima nam necessitatibus nemo praesentium soluta tempora vitae! Accusamus consequuntur dolore enim id, itaque laudantium nam nostrum perspiciatis praesentium, quos tempora voluptates voluptatibus! Amet architecto autem beatae cum ducimus ipsa maxime minus. Cupiditate dolor harum laborum natus neque nostrum numquam quisquam quod sequi voluptatem. Aperiam culpa dolores magnam. Aliquid assumenda distinctio facilis iste maxime obcaecati quam quos saepe, soluta voluptatem?',
        author: '',
        date: '2025-08-19',
    },
    {
        id: 4,
        title: 'Limp Bizkit или Linkin Park?',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dignissimos maiores nobis quas, quia similique sunt voluptate. Aperiam autem blanditiis ex ipsum itaque libero maiores pariatur sed suscipit. Aliquid atque dolorum laudantium quaerat reiciendis vero voluptas! Consequatur laudantium nam, necessitatibus nemo quis recusandae sit vel? Adipisci beatae, cupiditate enim, esse, iste itaque minima nam necessitatibus nemo praesentium soluta tempora vitae! Accusamus consequuntur dolore enim id, itaque laudantium nam nostrum perspiciatis praesentium, quos tempora voluptates voluptatibus! Amet architecto autem beatae cum ducimus ipsa maxime minus. Cupiditate dolor harum laborum natus neque nostrum numquam quisquam quod sequi voluptatem. Aperiam culpa dolores magnam. Aliquid assumenda distinctio facilis iste maxime obcaecati quam quos saepe, soluta voluptatem?',
        author: '',
        date: '2025-08-19',
    },
]

export const getters = {
    getPostById: (state) => (id) => {
        return state.posts.find(post => post.id === id);
    }
};
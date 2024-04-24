import { useAppDispatch } from "./hook";

const useNode = () => {
    const dispatch = useAppDispatch();

    const insertNode = function (tree: any, commentId: any, item: any) {
        if (tree.id === commentId) {
            tree.comments.push({
                id: new Date().getTime(),
                createdTime: new Date(),
                isLiked: false,
                isDisLiked: false,
                numberOfLike: 0,
                numberOfDisLike: 0,
                content: item.content,
                shoesId: item.shoesId,
                userId: item.userId,
                parentId: null,
                comments: [],
            });
            return tree;
        }

        let latestNode = [];
        latestNode = tree.comments.map((ob: any) => {
            return insertNode(ob, commentId, item);
        });

        return {
            ...tree, createdTime: new Date(), isLiked: false, isDisLiked: false, numberOfReact: 0, numberOfLike: 0, content: item.content, shoesId: item.shoesId,
            userId: item.userId,
            numberOfDisLike: 0, items: latestNode
        };
    };

    const editNode = (tree: any, commentId: any, value: any) => {
        if (tree.id === commentId) {
            tree.name = value;
            return tree;
        }

        tree.comments.map((ob: any) => {
            return editNode(ob, commentId, value);
        });

        return { ...tree };
    };
    const reaction = (tree: any, commentId: any, type: any) => {
        if (tree.id === commentId) {
            if (type == "like") {
                tree.isLiked = !tree.isLiked;
                tree.numberOfLike = tree.isLiked ? tree.numberOfLike + 1 : tree.numberOfLike - 1
                if (tree.isDisLiked) {
                    tree.isDisLiked = !tree.isDisLiked;
                    tree.numberOfDisLike = tree.numberOfDisLike - 1;
                }
                return tree;
            } else {
                tree.isDisLiked = !tree.isDisLiked;
                tree.numberOfDisLike = tree.isDisLiked ? tree.numberOfDisLike + 1 : tree.numberOfDisLike - 1;
                if (tree.isLiked) {
                    tree.isLiked = !tree.isLiked;
                    tree.numberOfLike = tree.numberOfLike - 1
                }
                return tree;
            }
        }

        tree.comments.map((ob: any) => {
            return reaction(ob, commentId, type);
        });

        return { ...tree };
    };

    const deleteNode = (tree: any, id: any) => {
        for (let i = 0; i < tree.comments.length; i++) {
            const currentItem = tree.comments[i];
            if (currentItem.id === id) {
                tree.comments.splice(i, 1);
                return tree;
            } else {
                deleteNode(currentItem, id);
            }
        }
        return tree;
    };

    return { insertNode, reaction, editNode, deleteNode };
};

export default useNode;
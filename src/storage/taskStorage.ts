import AsyncStorage from "@react-native-async-storage/async-storage";

const TASK_STORAGE_KEY = "taskStorage";

export type TaskStorageProps = {
  id: string;
  text: string;
  checked: boolean;
};

async function get(): Promise<TaskStorageProps[]> {
  const storage = await AsyncStorage.getItem(TASK_STORAGE_KEY);
  const response = storage ? JSON.parse(storage) : [];

  return response;
}

async function add(newTask: TaskStorageProps) {
  try {
    const storage = await get();

    const updated = [...storage, newTask];

    await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updated));
  } catch (error) {
    throw error;
  }
}

async function changeChecked(id: string) {
  try {
    const storage = await get();

    const updateTasks = storage.map(item => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updateTasks));
  } catch (error) {
    throw error;
  }
}

async function remove(id: string) {
  try {
    const storage = await get();

    const updatedTasks = storage.filter(item => item.id !== id);

    await AsyncStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(updatedTasks));
  } catch (error) {
    throw error;
  }
}

export const taskStorage = { get, add, changeChecked, remove };

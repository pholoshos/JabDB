// index.js

const { create } = require('apisauce');

class JabDB {
  constructor(apiBaseUrl, apiKey) {
    this.api = create({
      baseURL: apiBaseUrl,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
  }

  async getAllCollections() {
    try {
      const response = await this.api.get('/db/collections');
      return response.data;
    } catch (error) {
      console.error('Error fetching collections:', error.message);
      throw error;
    }
  }

  async getCollectionData(collectionName, options = {}) {
    try {
      const { filters, sortField, sortOrder, page, pageSize } = options;
      const params = {
        filters: filters ? JSON.stringify(filters) : undefined,
        sortField,
        sortOrder,
        page,
        pageSize,
      };
      const response = await this.api.get(`/${collectionName}`, { params });
      return response.data;
    } catch (error) {
      console.error(`Error fetching data from collection ${collectionName}:`, error.message);
      throw error;
    }
  }

  async getEntryById(collectionName, id) {
    try {
      const response = await this.api.get(`/${collectionName}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching entry with ID ${id} from collection ${collectionName}:`, error.message);
      throw error;
    }
  }

  async searchEntityByField(collectionName, fieldName, searchValue) {
    try {
      const response = await this.api.get(`/${collectionName}/search`, {
        params: {
          fieldName,
          searchValue,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error searching for entities in collection ${collectionName}:`, error.message);
      throw error;
    }
  }

  async addDataToCollection(collectionName, newData) {
    try {
      const response = await this.api.post(`/${collectionName}`, newData);
      return response.data;
    } catch (error) {
      console.error(`Error adding data to collection ${collectionName}:`, error.message);
      throw error;
    }
  }

  async deleteDataFromCollection(collectionName, id) {
    try {
      const response = await this.api.delete(`/${collectionName}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting data with ID ${id} from collection ${collectionName}:`, error.message);
      throw error;
    }
  }

  async updateDataInCollection(collectionName, id, updatedData) {
    try {
      const response = await this.api.put(`/${collectionName}/${id}`, updatedData);
      return response.data;
    } catch (error) {
      console.error(`Error updating data with ID ${id} in collection ${collectionName}:`, error.message);
      throw error;
    }
  }

  // Add more methods for other functionalities as needed

}

module.exports = JabDB;

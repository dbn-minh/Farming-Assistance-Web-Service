/**
 * @swagger
 * /admin/get-admin/{adminID}:
 *   get:
 *     summary: Get admin by admin ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: adminID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the admin to retrieve
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: Internal server error
 * /admin/update-info/{adminID}:
 *   put:
 *     summary: Update admin information by admin ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: adminID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the admin user to update
 *       - in: body
 *         name: adminInfo
 *         required: true
 *         description: Updated admin information
 *         schema:
 *           type: object
 *           properties:
 *             adminName:
 *               type: string
 *             phone:
 *               type: string
 *             email:
 *               type: string
 *             address:
 *               type: string
 *     responses:
 *       '200':
 *         description: Successfully updated
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: Internal server error
 * /admin/tip:
 *   get:
 *     summary: Get all tips
 *     tags:
 *       - Admin
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '500':
 *         description: Internal server error
 * /admin/add-tip:
 *   post:
 *     summary: Add new tip
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            type: object
 *            properties:
 *              title:
 *                 type: string
 *              content:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successfully added
 *       '500':
 *         description: Internal server error
 * /admin/complaint:
 *   get:
 *     summary: Get all complaints
 *     tags:
 *       - Admin
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '500':
 *         description: Internal server error
 * /admin/transaction:
 *   get:
 *     summary: Get all transactions
 *     tags:
 *       - Admin
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '500':
 *         description: Internal server error
 * /admin/order/{transactionID}:
 *   get:
 *     summary: Get all orders for a given transaction ID
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: transactionID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the transaction to retrieve orders for
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '500':
 *         description: Internal server error
 * /admin/upload-avatar/{adminID}:
 *   post:
 *     summary: Upload avatar image for admin
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: path
 *         name: adminID
 *         required: true
 *         schema:
 *           type: string
 *         description: adminID to upload avatar
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatarImg:
 *                 type: string
 *                 format: binary
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '404':
 *         description: Admin not found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /farmer/get-farmer/{farmerID}:
 *   get:
 *     summary: Get farmer profile
 *     tags:
 *       - Farmer
 *     parameters:
 *       - in: path
 *         name: farmerID
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the farmer profile to retrieve
 *     responses:
 *       '200':
 *         description: Successful operation
 *       '500':
 *         description: Internal server error
 */

import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const categories = sqliteTable('Category', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    displayName: text('displayName'),
    path: text('path').notNull(),
    color: text('color'),
    target: text('target'),
    icon: text('icon'),    
    subTitle: text('subTitle'),
    description: text('description')
});

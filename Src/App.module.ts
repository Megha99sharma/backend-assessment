// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { Product } from 'shared-orm-lib/dist/product.entity';
import { Category } from 'shared-orm-lib/dist/category.entity';
import { databaseConnection } from 'shared-orm-lib/dist/database.connection';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConnection),
    TypeOrmModule.forFeature([Product, Category]),
  ],
  controllers: [ProductController, CategoryController],
  providers: [ProductService, CategoryService],
})
export class AppModule {}

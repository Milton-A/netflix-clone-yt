"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { getProducts, Product } from '@invertase/firestore-stripe-payments'
import payments from '@/lib/stripe';

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts(payments, {
                    includePrices: true,
                    activeOnly: true,
                });
                setProducts(fetchedProducts);
            } catch (err) {
                setError('Erro ao buscar produtos');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return { products, loading, error };
};